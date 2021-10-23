import { penaltyOptions } from './const';
import { ComposeFilter, ComposeResult, Effects, Imprint, Item } from './type';
import { addRecord, permutator } from './util';

function chooseItems(
  entries: Item[][],
  accList: string[],
  initialEffect: Effects,
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
    return filter.hasBuyPrice ? !item.buyPrice : false;
  }

  function isEffectsFiltered(effects: Effects) {
    return Object.keys(filter).find(
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
    if (hasPenalty(effects) || price > maxPrice) {
      return [];
    }
    if (d === 5) {
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
  return rec(initialEffect, 0, {}, {}, 0);
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
  filter: ComposeFilter
) {
  const accPermutation = permutator([
    '목걸이',
    '귀걸이1',
    '귀걸이2',
    '반지1',
    '반지2',
  ]);
  let result: ComposeResult[] = [];
  for (const combination of combinations) {
    for (const accList of accPermutation) {
      const entries: Item[][] = [];
      for (let i = 0; i < 5; i += 1) {
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
      if (entries.length === 5) {
        result.push(
          ...chooseItems(
            entries,
            accList,
            initialEffect,
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
    }
  }

  return result;
}
