import {
  ComposeFilter,
  ComposeResult,
  Product,
  SearchResult,
  Summary,
} from './type';

function getPrice(products: Product[]) {
  const trade2 = products.find((x) => x.tradeLeft === 2)?.price;
  const trade1 = products.find((x) => x.tradeLeft === 1)?.price;
  const trade0 = products.find((x) => x.tradeLeft === 0)?.price;

  return {
    trade2,
    trade1,
    trade0,
    price: Math.min(
      ...[trade2, trade1, trade0].filter((x): x is number => x != null)
    ),
  };
}

function summarySearchResult(
  searchResult: SearchResult[],
  filter: ComposeFilter
): Record<number, Summary[]> {
  const obj: Record<number, Summary[]> = {
    180000: [],
    190010: [],
    190020: [],
    190030: [],
    190040: [],
    190050: [],
  };
  searchResult.forEach(({ tripod, products }) => {
    const filteredProducts = products.filter(
      (x) => x.tradeLeft >= filter.tradeLeft
    );
    const head = filteredProducts.filter((x) => x.name.endsWith('모자'));
    const top = filteredProducts.filter((x) => x.name.endsWith('상의'));
    const bottom = filteredProducts.filter((x) => x.name.endsWith('하의'));
    const glove = filteredProducts.filter((x) => x.name.endsWith('장갑'));
    const shoulder = filteredProducts.filter((x) => x.name.endsWith('견갑'));
    const weapon = filteredProducts.filter(
      (x) =>
        ![...head, ...top, ...bottom, ...glove, ...shoulder].find(
          (y) => x.id === y.id
        )
    );

    [
      { gear: head, code: 190010 },
      { gear: top, code: 190020 },
      { gear: bottom, code: 190030 },
      { gear: glove, code: 190040 },
      { gear: shoulder, code: 190050 },
      { gear: weapon, code: 180000 },
    ].forEach(({ gear, code }) => {
      if (gear.length > 0) {
        obj[code].push({
          tripod,
          ...getPrice(gear),
        });
      }
    });
  });

  return obj;
}

function tripodOverlap(list: Record<string, Summary>, item: Summary) {
  return !!Object.values(list).find((x) =>
    x.tripod.find((y) =>
      item.tripod.find((z) => z.skill === y.skill && z.tripod === y.tripod)
    )
  );
}

export function compose(
  searchResult: SearchResult[],
  categoryList: number[],
  filter: ComposeFilter
): ComposeResult[] {
  const summaryRecord = summarySearchResult(searchResult, filter);
  let results: { summary: Record<number, Summary>; price: number }[] = [];
  function rec(
    summary: Record<number, Summary>,
    totalPrice: number,
    d: number
  ) {
    if (totalPrice > (results[results.length - 1]?.price ?? Infinity)) {
      return;
    }
    if (d === categoryList.length) {
      results.push({ summary, price: totalPrice });
      results.sort((a, b) => a.price - b.price);
      results = results.slice(0, 100);
      return;
    }
    const list = summaryRecord[categoryList[d]];
    for (let el of list) {
      if (!tripodOverlap(summary, el)) {
        rec(
          { ...summary, [categoryList[d]]: el },
          totalPrice + el.price,
          d + 1
        );
      }
    }
  }
  rec([], 0, 0);
  return results;
}
