import {
  ComposeFilter,
  ComposeResult,
  Product,
  SearchResult,
  Summary,
  TripodValue,
} from './type';
import { hashTripod } from './util';

function getPrice(products: Product[]) {
  const trade2 = products.find((x) => x.tradeLeft === 2)?.buyPrice;
  const trade1 = products.find((x) => x.tradeLeft === 1)?.buyPrice;
  const trade0 = products.find((x) => x.tradeLeft === 0)?.buyPrice;

  if (!trade2 && !trade1 && !trade0) {
    return;
  }

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
        const priceObj = getPrice(gear);
        if (priceObj) {
          obj[code].push({
            tripod,
            ...priceObj,
          });
        }
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
  tripods: TripodValue[],
  categoryList: number[],
  filter: ComposeFilter
): ComposeResult[] {
  const tripodCount = Math.min(tripods.length, categoryList.length * 2);
  const summaryRecord =
    tripodCount === categoryList.length * 2
      ? summarySearchResult(
          searchResult.filter((x) => x.tripod.length >= 2),
          filter
        )
      : summarySearchResult(searchResult, filter);
  const requiredTripodSet = new Set(
    filter.requiredTripods.map((tripod) => hashTripod(tripod))
  );
  let results: { summary: Record<number, Summary>; price: number }[] = [];
  function rec(
    summary: Record<number, Summary>,
    totalPrice: number,
    requiredLeft: number,
    d: number,
    f: number
  ) {
    if (totalPrice > (results[results.length - 1]?.price ?? Infinity)) {
      return;
    }
    if (requiredLeft > (categoryList.length - d) * 2) {
      return;
    }
    if (d === categoryList.length) {
      if (requiredLeft <= 0 && f >= tripodCount) {
        results.push({ summary, price: totalPrice });
        results.sort((a, b) => a.price - b.price);
        results = results.slice(0, 100);
      }
      return;
    }
    const list = summaryRecord[categoryList[d]];
    for (let el of list) {
      if (!tripodOverlap(summary, el)) {
        const requiredCount = el.tripod.filter((x) =>
          requiredTripodSet.has(hashTripod(x))
        ).length;
        rec(
          { ...summary, [categoryList[d]]: el },
          totalPrice + el.price,
          requiredLeft - requiredCount,
          d + 1,
          f + el.tripod.length
        );
      }
    }
  }
  rec([], 0, requiredTripodSet.size, 0, 0);
  return results.map((result) => {
    const tripods = Object.values(result.summary).flatMap((x) => x.tripod);
    const restSingles = searchResult
      .filter((x) => x.tripod.length === 1)
      .filter(
        (x) =>
          !tripods.find(
            (y) =>
              x.tripod[0].skill === y.skill && x.tripod[0].tripod === y.tripod
          )
      )
      .map((x) => ({
        tripod: x.tripod[0],
        price:
          x.products.filter((x) => x.buyPrice)[0]?.buyPrice ||
          x.products[0]?.auctionPrice ||
          0,
      }));
    return { ...result, restSingles };
  });
}
