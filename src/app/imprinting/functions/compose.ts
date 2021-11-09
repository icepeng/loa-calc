import { permutations } from '../../../util';
import { penaltyOptions } from './const';
import { ComposeFilter, ComposeResult, Effects, Imprint, Item } from './type';
import { addRecord } from './util';

function chooseItems(
  entries: Item[][],
  accList: string[],
  initialEffect: Effects,
  fixedItems: Record<string, Item>,
  maxPrice: number,
  filter: ComposeFilter
) {
  function hasPenalty(effects: Effects) {
    return penaltyOptions.find(
      (penalty) =>
        effects[penalty] >=
        Math.floor((initialEffect[penalty] ?? 0) / 5 + 1) * 5
    );
  }

  function isItemFiltered(item: Item) {
    return (
      (filter.hasBuyPrice ? !item.buyPrice : false) ||
      item.tradeLeft! < filter.tradeLeft ||
      filter.exclude.has(item.id!)
    );
  }

  function isEffectsFiltered(effects: Effects) {
    return Object.keys(filter.effects).find(
      (name) => effects[name] < filter.effects[name]
    );
  }

  function rec(
    effects: Effects,
    price: number,
    usedItemNames: Record<string, boolean>,
    items: Record<string, Item>,
    d: number
  ): ComposeResult[] {
    if ((filter.noPenalty && hasPenalty(effects)) || price > maxPrice) {
      return [];
    }
    if (d === accList.length) {
      if (isEffectsFiltered(effects)) {
        return [];
      }
      return [
        {
          effects,
          price,
          items,
        },
      ];
    }

    const result = [];
    const currentItems = entries[d];
    const accName = accList[d];
    for (const item of currentItems) {
      if (usedItemNames[item.name]) {
        continue;
      }
      if (isItemFiltered(item)) {
        continue;
      }
      result.push(
        ...rec(
          addRecord(effects, item.effects),
          price + item.price,
          {
            ...usedItemNames,
            [item.name]: true,
          },
          {
            ...items,
            [accName]: item,
          },
          d + 1
        )
      );
    }
    return result;
  }
  return rec(
    Object.values(fixedItems).reduce(
      (sum, x) => addRecord(sum, x.effects),
      initialEffect
    ),
    0,
    Object.fromEntries(Object.values(fixedItems).map((x) => [x.name, true])),
    fixedItems,
    0
  );
}

function hashResult(result: ComposeResult) {
  return JSON.stringify(
    Object.values(result.items).sort((a, b) => a.name.localeCompare(b.name))
  );
}

export function compose(
  combinations: Imprint[][],
  initialEffect: Effects,
  searchResult: Record<string, Item[]>,
  fixedItems: Record<string, Item>,
  filter: ComposeFilter
) {
  const accPermutation = Array.from(
    permutations(
      ['목걸이', '귀걸이1', '귀걸이2', '반지1', '반지2'].filter(
        (x) => !fixedItems[x]
      )
    )
  );
  const total = accPermutation.length * combinations.length;
  let finished = 0;
  let result: ComposeResult[] = [];
  for (const combination of combinations) {
    for (const accList of accPermutation) {
      const entries: Item[][] = [];
      for (let i = 0; i < accList.length; i += 1) {
        const acc = accList[i];
        const imprint = Object.entries(combination[i]);
        const items =
          searchResult[
            `${imprint[0][0]}_${imprint[0][1]}_${imprint[1][0]}_${imprint[1][1]}_${acc}`
          ];
        if (items.length > 0) {
          entries.push(items);
        }
      }
      if (entries.length === accList.length) {
        result.push(
          ...chooseItems(
            entries,
            accList,
            initialEffect,
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

  postMessage({
    done: true,
    result,
  });
}
