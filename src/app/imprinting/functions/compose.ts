import { permutations } from '../../../util';
import { dealOptions, penaltyOptions } from './const';
import {
  AccMap,
  Candidate,
  ComposeFilter,
  ComposeResult,
  Effects,
  Imprint,
  Item,
  StoneBook,
} from './type';
import { addRecord, getOverlappingAcc } from './util';

function getMinPriceCache(entries: Item[][], len: number) {
  return Array.from({ length: len }, (_, k) => {
    let sum = 0;
    for (let i = k; i < len - 1; i += 1) {
      sum += entries[i + 1][0].price;
    }
    return sum;
  });
}

function chooseItems(
  entries: Item[][],
  accList: string[],
  stoneBook: StoneBook,
  fixedItems: Record<string, Item>,
  maxPrice: number,
  filter: ComposeFilter
) {
  const penalties = penaltyOptions.filter(
    (penalty) => !filter.allowedPenalties.includes(penalty)
  );
  const initialEffect = Object.fromEntries([stoneBook.stonePenalty]);
  const minPriceCache = getMinPriceCache(entries, accList.length);

  function hasPenalty(effects: Effects) {
    return penalties.find(
      (penalty) =>
        effects[penalty] >=
        Math.floor((initialEffect[penalty] ?? 0) / 5 + 1) * 5
    );
  }

  function isEffectsFiltered(effects: Effects) {
    return Object.keys(filter.effects).find(
      (name) => effects[name] < filter.effects[name]
    );
  }

  const len = accList.length;

  function rec(
    effects: Effects,
    price: number,
    usedItemNames: Set<string>,
    items: Record<string, Item>,
    d: number
  ): ComposeResult[] {
    if (d === len) {
      if (isEffectsFiltered(effects)) {
        return [];
      }
      if (
        filter.ancientCountMin > 0 &&
        Object.values(items).filter((item) => item.grade === 6).length <
          filter.ancientCountMin
      ) {
        return [];
      }
      return [
        {
          effects,
          price,
          items: { ...items },
          stoneBook,
        },
      ];
    }

    const result: ComposeResult[] = [];
    const currentItems = entries[d];
    const accName = accList[d];
    const afterPriceMin = minPriceCache[d];

    for (const item of currentItems) {
      if (usedItemNames.has(item.name)) {
        continue;
      }
      if (price + item.price + afterPriceMin > maxPrice) {
        continue;
      }
      const nextEffects = addRecord(effects, item.effects);
      if (hasPenalty(nextEffects)) {
        continue;
      }
      usedItemNames.add(item.name);
      items[accName] = item;
      result.push(
        ...rec(nextEffects, price + item.price, usedItemNames, items, d + 1)
      );
      usedItemNames.delete(item.name);
      delete items[accName];
    }

    return result;
  }
  return rec(
    Object.values(fixedItems).reduce(
      (sum, x) => addRecord(sum, x.effects),
      initialEffect
    ),
    0,
    new Set(Object.values(fixedItems).map((x) => x.name)),
    fixedItems,
    0
  );
}

function hashResult(result: ComposeResult) {
  return JSON.stringify(
    Object.values(result.items).sort((a, b) => a.name.localeCompare(b.name))
  );
}

function prefilter(items: Item[], filter: ComposeFilter) {
  function isItemFiltered(item: Item) {
    return (
      item.grade! < 5 ||
      (filter.hasBuyPrice ? !item.buyPrice : false) ||
      item.tradeLeft! < filter.tradeLeft ||
      filter.exclude.has(item.id!)
    );
  }

  return items.filter((item) => item.isFixed || !isItemFiltered(item));
}

export function compose(
  candidates: Candidate[],
  accMap: Record<string, AccMap>,
  searchResult: Record<string, Item[]>,
  fixedItems: Record<string, Item>,
  filter: ComposeFilter
) {
  let accPermutation = Array.from(
    permutations(
      ['목걸이', '귀걸이1', '귀걸이2', '반지1', '반지2'].filter(
        (x) => !fixedItems[x]
      )
    )
  );
  const overlappingAcc = getOverlappingAcc(accMap);
  if (overlappingAcc.귀걸이) {
    accPermutation = accPermutation.filter((permutation) => {
      const index1 = permutation.findIndex((el) => el === '귀걸이1');
      const index2 = permutation.findIndex((el) => el === '귀걸이2');
      return index1 < index2;
    });
  }
  if (overlappingAcc.반지) {
    accPermutation = accPermutation.filter((permutation) => {
      const index1 = permutation.findIndex((el) => el === '반지1');
      const index2 = permutation.findIndex((el) => el === '반지2');
      return index1 < index2;
    });
  }
  const total =
    accPermutation.length *
    candidates.flatMap((candidate) => candidate.combinations).length;
  const prefiltered = Object.fromEntries(
    Object.entries(searchResult).map(([key, value]) => [
      key,
      prefilter(value, filter),
    ])
  );
  let finished = 0;
  const resultMap = new Map<StoneBook, ComposeResult[]>();
  for (const { combinations, stoneBook } of candidates) {
    let result: ComposeResult[] = [];
    for (const combination of combinations) {
      for (const accList of accPermutation) {
        const entries: Item[][] = [];
        for (let i = 0; i < accList.length; i += 1) {
          const acc = accList[i];
          const imprint = Object.entries(combination[i]);
          const items = prefiltered[
            `${imprint[0][0]}_${imprint[0][1]}_${imprint[1][0]}_${imprint[1][1]}_${acc}`
          ].sort((a, b) => a.price - b.price);
          if (items.length > 0) {
            entries.push(items);
          }
        }
        if (entries.length === accList.length) {
          result.push(
            ...chooseItems(
              entries,
              accList,
              stoneBook,
              fixedItems,
              result.length ? result[result.length - 1].price : Infinity,
              filter
            )
          );
          const temp: Record<string, ComposeResult> = {};
          result.forEach((res) => {
            temp[hashResult(res)] = res;
          });
          result = Object.values(temp);
          result.sort((a, b) => a.price - b.price);
          result = result.slice(0, 300);
        }

        finished += 1;
        postMessage({
          done: false,
          total,
          finished,
        });
      }
    }
    resultMap.set(stoneBook, result);
  }

  postMessage({
    done: true,
    result: [...resultMap.values()].flat().sort((a, b) => a.price - b.price),
  });
}
