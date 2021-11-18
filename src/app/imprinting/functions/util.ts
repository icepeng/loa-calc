import { AccMap, Item } from './type';

export function addRecord(a: Record<string, number>, b: [string, number][]) {
  const result = { ...a };
  b.forEach(([key, value]) => {
    if (!result[key]) {
      result[key] = 0;
    }
    result[key] += value;
  });

  return result;
}

export function filterRecord(record: Record<string, number>) {
  return Object.fromEntries(
    Object.entries(record).filter(([key, value]) => value > 0)
  );
}

export function addEntries(entries: [string, number][]) {
  const result: Record<string, number> = {};
  entries.forEach(([key, value]) => {
    if (!result[key]) {
      result[key] = 0;
    }
    result[key] += value;
  });

  return Object.entries(result);
}

export function dedupe<T>(arr: T[]): T[] {
  return Array.from(new Set(arr.map((item) => JSON.stringify(item)))).map(
    (item) => JSON.parse(item)
  );
}

export function getOverlappingAcc(accMap: Record<string, AccMap>) {
  return {
    귀걸이:
      JSON.stringify(accMap['귀걸이1']) === JSON.stringify(accMap['귀걸이2']),
    반지: JSON.stringify(accMap['반지1']) === JSON.stringify(accMap['반지2']),
  };
}

export function getFixedItem(acc: AccMap, price?: number): Item {
  return {
    isFixed: true,
    name: acc.name,
    id: null,
    grade: null,
    tradeLeft: null,
    quality: acc.quality,
    price: price ?? 0,
    auctionPrice: price ?? 0,
    buyPrice: price ?? 0,
    effects: addEntries(
      [
        acc.dealOption1,
        acc.dealOption2,
        acc.imprintOption1,
        acc.imprintOption2,
        acc.imprintPenalty,
      ].filter((x): x is [string, number] => !!x)
    ),
  };
}

export function addItemsToSearchResult(
  searchResult: Record<string, Item[]>,
  accMap: Record<string, AccMap>,
  additionalItems: { acc: AccMap; price: number }[]
) {
  const next = { ...searchResult };
  const categoryMap: Record<string, string[]> = {
    목걸이: ['목걸이'],
    귀걸이: ['귀걸이1', '귀걸이2'],
    반지: ['반지1', '반지2'],
  };
  additionalItems.forEach((data) => {
    const categories = categoryMap[data.acc.category];
    for (const category of categories) {
      if (
        category === '목걸이'
          ? [data.acc.dealOption1[0], data.acc.dealOption2![0]].find(
              (option) =>
                ![
                  accMap[category].dealOption1[0],
                  accMap[category].dealOption2![0],
                ].includes(option)
            )
          : data.acc.dealOption1[0] !== accMap[category].dealOption1[0]
      ) {
        continue;
      }
      for (const [a, b] of [
        [data.acc.imprintOption1, data.acc.imprintOption2],
        [data.acc.imprintOption2, data.acc.imprintOption1],
      ]) {
        const key = `${a[0]}_${a[1]}_${b[0]}_${b[1]}_${category}`;
        if (next[key]) {
          next[key] = [...next[key], getFixedItem(data.acc, data.price)];
          next[key].sort((a, b) => a.price - b.price);
        }
      }
    }
  });

  return next;
}
