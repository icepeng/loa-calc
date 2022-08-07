import { permutations } from '../../../util';
import { penaltyOptions } from './const';
import {
  AccMap,
  Candidate,
  ComposeFilter,
  ComposeResult,
  Effects,
  Item,
  StoneBook,
} from './type';
import { addRecord, getOverlappingAcc, getUniqueId } from './util';

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
  let effFilteredCount = 0;
  let totalCount = 0;

  function rec(
    effects: Effects,
    price: number,
    usedItemIds: Set<string>,
    items: Record<string, Item>,
    d: number
  ): ComposeResult[] {
    if (d === len) {
      totalCount += 1;

      if (isEffectsFiltered(effects)) {
        effFilteredCount += 1;
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
      if (usedItemIds.has(item.id)) {
        continue;
      }
      if (price + item.price + afterPriceMin > maxPrice) {
        continue;
      }
      const nextEffects = addRecord(effects, item.effects);
      if (hasPenalty(nextEffects)) {
        continue;
      }
      usedItemIds.add(item.id);
      items[accName] = item;
      result.push(
        ...rec(nextEffects, price + item.price, usedItemIds, items, d + 1)
      );
      usedItemIds.delete(item.id);
      delete items[accName];
    }

    return result;
  }

  const composeResults = rec(
    Object.values(fixedItems).reduce(
      (sum, x) => addRecord(sum, x.effects),
      initialEffect
    ),
    0,
    new Set(Object.values(fixedItems).map((x) => x.id)),
    fixedItems,
    0
  );

  return { composeResults, totalCount, effFilteredCount };
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

function getDummyItem(imprint: [string, number][]): Item {
  return {
    id: getUniqueId(),
    name: '제외된 부위',
    price: 0,
    grade: 0,
    tradeLeft: 0,
    isFixed: true,
    effects: imprint,
    buyPrice: 0,
    auctionPrice: 0,
    quality: 0,
  };
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
  if (
    overlappingAcc.귀걸이 &&
    !(
      filter.ignoredSlots.includes('귀걸이1') ||
      filter.ignoredSlots.includes('귀걸이2')
    )
  ) {
    accPermutation = accPermutation.filter((permutation) => {
      const index1 = permutation.findIndex((el) => el === '귀걸이1');
      const index2 = permutation.findIndex((el) => el === '귀걸이2');
      return index1 < index2;
    });
  }
  if (
    overlappingAcc.반지 &&
    !(
      filter.ignoredSlots.includes('반지1') ||
      filter.ignoredSlots.includes('반지2')
    )
  ) {
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
  let totalCount = 0;
  let effFilteredCount = 0;
  const resultMap = new Map<StoneBook, ComposeResult[]>();

  for (const { combinations, stoneBook } of candidates) {
    let composeResults: ComposeResult[] = [];
    for (const combination of combinations) {
      for (const accList of accPermutation) {
        const entries: Item[][] = [];
        for (let i = 0; i < accList.length; i += 1) {
          const acc = accList[i];
          const imprint = Object.entries(combination[i]);
          if (filter.ignoredSlots.includes(acc)) {
            if (
              filter.fixedImprintings.includes(imprint[0][0]) ||
              filter.fixedImprintings.includes(imprint[1][0])
            ) {
              continue;
            }
            entries.push([getDummyItem(imprint)]);
            continue;
          }

          const items = prefiltered[
            `${imprint[0][0]}_${imprint[0][1]}_${imprint[1][0]}_${imprint[1][1]}_${acc}`
          ].sort((a, b) => a.price - b.price);
          if (items.length > 0) {
            entries.push(items);
          }
        }
        if (entries.length === accList.length) {
          const result = chooseItems(
            entries,
            accList,
            stoneBook,
            fixedItems,
            composeResults.length
              ? composeResults[composeResults.length - 1].price
              : Infinity,
            filter
          );
          composeResults.push(...result.composeResults);
          totalCount += result.totalCount;
          effFilteredCount += result.effFilteredCount;

          const temp: Record<string, ComposeResult> = {};
          composeResults.forEach((res) => {
            temp[hashResult(res)] = res;
          });
          composeResults = Object.values(temp);
          composeResults.sort((a, b) => a.price - b.price);
          composeResults = composeResults.slice(0, 300);
        }

        finished += 1;
        postMessage({
          done: false,
          total,
          finished,
        });
      }
    }
    resultMap.set(stoneBook, composeResults);
  }

  postMessage({
    done: true,
    result: [...resultMap.values()].flat().sort((a, b) => a.price - b.price),
    effFilteredRate: effFilteredCount / totalCount,
  });
}
