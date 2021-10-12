import { RefineTable } from './data';

export type Path = {
  prob: number;
  jangin: number;
  breathes: string[];
}[];

function getPrice(
  priceMap: Record<string, number>,
  amountMap: Record<string, number>
) {
  return Object.entries(amountMap)
    .map(([key, amount]) => (key === '골드' ? amount : priceMap[key] * amount))
    .reduce((sum, x) => sum + x, 0);
}

function buildBreath(
  priceMap: Record<string, number>,
  breathMap: Record<string, [number, number]>,
  baseProb: number
) {
  const breathes = Object.keys(breathMap).sort(
    (a, b) => breathMap[b][1] / priceMap[b] - breathMap[a][1] / priceMap[a]
  );

  const adjustedBreathMap: Record<string, [number, number]> = {};
  let probLeft = Math.max(baseProb, 0.01);

  breathes.forEach((name) => {
    const [breathAmount, breathProb] = breathMap[name];
    if (name === '은총' || name === '축복' || name === '가호') {
      const amount = Math.min(Math.ceil(probLeft / breathProb), breathAmount);
      adjustedBreathMap[name] = [
        amount * priceMap[name],
        Math.min(amount * breathProb, probLeft),
      ];
      probLeft -= amount * breathProb;
    } else {
      adjustedBreathMap[name] = [priceMap[name], breathProb];
    }
  });

  return breathes.reduce(
    (arr, name) => {
      const { price, prob, breathes } = arr[arr.length - 1];
      const [breathPrice, breathProb] = adjustedBreathMap[name];
      arr.push({
        price: price + breathPrice,
        prob: prob + breathProb,
        breathes: [...breathes, name],
      });
      return arr;
    },
    [{ price: 0, prob: 0, breathes: [] as string[] }]
  );
}

export function optimize(
  table: RefineTable,
  priceMap: Record<string, number>,
  additionalProb: number,
  probFromFailure: number,
  startJangin: number
) {
  const basePrice = getPrice(priceMap, table.amount);
  const baseProb = table.baseProb;
  const breath = buildBreath(priceMap, table.breath, baseProb);

  function rec(
    currentProb: number,
    jangin: number,
    breathCount: number
  ): {
    price: number;
    path: Path;
  } {
    if (currentProb + additionalProb >= 1) {
      return {
        price: basePrice,
        path: [{ prob: 1, jangin, breathes: [] }],
      };
    }
    if (jangin >= 1) {
      return {
        price: basePrice,
        path: [{ prob: 1, jangin: 1, breathes: [] }],
      };
    }

    const prices: number[] = [];
    const pathes: Path[] = [];

    for (let i = 0; i <= breathCount; i += 1) {
      const { price: breathPrice, prob: breathProb, breathes } = breath[i];
      const prob = Math.min(currentProb + additionalProb + breathProb, 1);
      const { price: failPrice, path } = rec(
        Math.min(currentProb + baseProb * 0.1, baseProb * 2),
        jangin + prob * 0.465,
        i
      );
      prices.push(basePrice + breathPrice + (1 - prob) * failPrice);
      pathes.push([
        { prob: currentProb + additionalProb, jangin, breathes },
        ...path,
      ]);
    }

    const minPrice = Math.min(...prices);
    const path = pathes[prices.indexOf(minPrice)];

    return { price: minPrice, path };
  }

  return rec(baseProb + probFromFailure, startJangin, breath.length - 1);
}
