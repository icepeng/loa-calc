import { RefineTable } from './data';

export type Step = {
  baseProb: number;
  totalProb: number;
  globalProb: number;
  jangin: number;
  price: number;
  breathes: Record<string, number>;
};

export type Path = Step[];

export const materialNames = [
  '파편',
  '하급오레하',
  '중급오레하',
  '상급오레하',
  '명돌',
  '위명돌',
  '경명돌',
  '수결',
  '파결',
  '수호강석',
  '파괴강석',
];

export const breathNames = ['은총', '축복', '가호'];

export const bookNames = [
  '재봉술기본',
  '재봉술응용',
  '재봉술심화',
  '야금술기본',
  '야금술응용',
  '야금술심화',
];

function getPrice(
  priceMap: Record<string, number>,
  bindedMap: Record<string, number>,
  amountMap: Record<string, number>
) {
  return Object.entries(amountMap)
    .map(
      ([key, amount]) =>
        priceMap[key] * Math.max(amount - (bindedMap[key] ?? 0), 0)
    )
    .reduce((sum, x) => sum + x, 0);
}

function subtractAmount(
  bindedMap: Record<string, number>,
  amountMap: Record<string, number>
) {
  return Object.fromEntries(
    Object.entries(bindedMap)
      .map(([key, amount]) => [key, amount - (amountMap[key] ?? 0)])
      .filter(([key, amount]) => amount > 0)
  );
}

function buildBreath(
  priceMap: Record<string, number>,
  breathMap: Record<string, [number, number]>,
  bindedMap: Record<string, number>,
  baseProb: number
) {
  const breathes = Object.keys(breathMap).sort((a, b) => {
    const comparator =
      (Math.max(breathMap[a][0] - (bindedMap[a] ?? 0), 0) * priceMap[a]) /
        (breathMap[a][0] * breathMap[a][1]) -
      (Math.max(breathMap[b][0] - (bindedMap[b] ?? 0), 0) * priceMap[b]) /
        (breathMap[b][0] * breathMap[b][1]);

    if (comparator === 0) {
      return priceMap[a] / breathMap[a][1] - priceMap[b] / breathMap[b][1];
    }

    return comparator;
  });

  const adjustedBreathMap: Record<
    string,
    { price: number; prob: number; amount: number }
  > = {};
  let probLeft = Math.max(baseProb, 0.01);

  breathes.forEach((name) => {
    const [breathAmount, breathProb] = breathMap[name];
    if (breathNames.includes(name)) {
      const amount = Math.min(Math.ceil(probLeft / breathProb), breathAmount);
      adjustedBreathMap[name] = {
        price: Math.max(amount - (bindedMap[name] ?? 0), 0) * priceMap[name],
        prob: Math.min(amount * breathProb, probLeft),
        amount,
      };
      probLeft -= amount * breathProb;
    } else {
      adjustedBreathMap[name] = {
        price: Math.max(1 - (bindedMap[name] ?? 0), 0) * priceMap[name],
        prob: breathProb,
        amount: 1,
      };
    }
  });

  return breathes.reduce(
    (arr, name) => {
      const prev = arr[arr.length - 1];
      const current = adjustedBreathMap[name];
      arr.push({
        price: prev.price + current.price,
        prob: prev.prob + current.prob,
        breathes: { ...prev.breathes, [name]: current.amount },
      });
      return arr;
    },
    [{ price: 0, prob: 0, breathes: {} as Record<string, number> }]
  );
}

export function optimize(
  table: RefineTable,
  priceMap: Record<string, number>,
  bindedMap: Record<string, number>,
  additionalProb: number,
  probFromFailure: number,
  startJangin: number
) {
  const baseProb = table.baseProb;
  const defaultBasePrice = getPrice(priceMap, {}, table.amount);
  const defaultBreath = buildBreath(priceMap, table.breath, {}, baseProb);

  function rec(
    currentProb: number,
    jangin: number,
    globalProb: number,
    breathCount: number,
    bindedLeft: Record<string, number>
  ): {
    price: number;
    path: Path;
  } {
    const isBindedEmpty = Object.keys(bindedLeft).length === 0;
    const basePrice = isBindedEmpty
      ? defaultBasePrice
      : getPrice(priceMap, bindedLeft, table.amount);
    const breath = isBindedEmpty
      ? defaultBreath
      : buildBreath(priceMap, table.breath, bindedLeft, baseProb);

    if (globalProb <= 0) {
      return {
        price: 0,
        path: [],
      };
    }
    if (jangin >= 1) {
      return {
        price: basePrice,
        path: [
          {
            baseProb: 1,
            totalProb: 1,
            globalProb,
            jangin: 1,
            price: basePrice,
            breathes: {},
          },
        ],
      };
    }

    const prices: number[] = [];
    const pathes: Path[] = [];

    for (let i = 0; i <= breathCount; i += 1) {
      const { price: breathPrice, prob: breathProb, breathes } = breath[i];
      const prob =
        Math.round(
          Math.min(currentProb + additionalProb + breathProb, 1) * 10000
        ) / 10000;
      const { price: failPrice, path } = rec(
        Math.min(currentProb + baseProb * 0.1, baseProb * 2),
        jangin + prob * 0.4651,
        globalProb * (1 - prob),
        i,
        subtractAmount(subtractAmount(bindedLeft, table.amount), breathes)
      );
      prices.push(basePrice + breathPrice + (1 - prob) * failPrice);
      pathes.push([
        {
          baseProb: currentProb + additionalProb,
          totalProb: prob,
          globalProb: globalProb * prob,
          jangin,
          price: basePrice + breathPrice,
          breathes,
        },
        ...path,
      ]);
    }

    const minPrice = Math.min(...prices);
    const path = pathes[prices.indexOf(minPrice)];

    return { price: minPrice, path };
  }

  return rec(
    baseProb + probFromFailure,
    startJangin,
    1,
    Object.keys(table.breath).length,
    bindedMap
  );
}

export function fixed(
  table: RefineTable,
  priceMap: Record<string, number>,
  bindedMap: Record<string, number>,
  additionalProb: number,
  probFromFailure: number,
  startJangin: number,
  breathCount: number
) {
  const baseProb = table.baseProb;
  const defaultBasePrice = getPrice(priceMap, {}, table.amount);
  const defaultBreath = buildBreath(priceMap, table.breath, {}, baseProb);

  function rec(
    currentProb: number,
    jangin: number,
    globalProb: number,
    bindedLeft: Record<string, number>
  ): {
    price: number;
    path: Path;
  } {
    const isBindedEmpty = Object.keys(bindedLeft).length === 0;
    const basePrice = isBindedEmpty
      ? defaultBasePrice
      : getPrice(priceMap, bindedLeft, table.amount);
    const breath = isBindedEmpty
      ? defaultBreath
      : buildBreath(priceMap, table.breath, bindedLeft, baseProb);

    if (globalProb <= 0) {
      return {
        price: 0,
        path: [],
      };
    }
    if (jangin >= 1) {
      return {
        price: basePrice,
        path: [
          {
            baseProb: 1,
            totalProb: 1,
            globalProb,
            jangin: 1,
            price: basePrice,
            breathes: {},
          },
        ],
      };
    }

    const {
      price: breathPrice,
      prob: breathProb,
      breathes,
    } = breath[breathCount];

    const prob =
      Math.round(
        Math.min(currentProb + additionalProb + breathProb, 1) * 10000
      ) / 10000;
    const { price: failPrice, path: failPath } = rec(
      Math.min(currentProb + baseProb * 0.1, baseProb * 2),
      jangin + prob * 0.4651,
      globalProb * (1 - prob),
      subtractAmount(subtractAmount(bindedLeft, table.amount), breathes)
    );

    return {
      price: basePrice + breathPrice + (1 - prob) * failPrice,
      path: [
        {
          baseProb: currentProb + additionalProb,
          totalProb: prob,
          globalProb: globalProb * prob,
          jangin,
          price: basePrice + breathPrice,
          breathes,
        },
        ...failPath,
      ],
    };
  }

  return rec(baseProb + probFromFailure, startJangin, 1, bindedMap);
}
