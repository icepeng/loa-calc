import { dedupe, subtractRecord } from './util';

type Imprint = Record<string, number>;

const splitTable: Record<number, number[]> = {
  1: [3],
  2: [3],
  3: [3],
  4: [4],
  5: [5],
  6: [3, 3],
  7: [3, 4],
  8: [3, 5],
  9: [3, 3, 3],
  10: [5, 5],
  11: [5, 3, 3],
  12: [5, 4, 3],
  13: [5, 5, 3],
  14: [5, 5, 4],
  15: [5, 5, 5],
};

export function getCandidates(imprint: Imprint): Imprint[] {
  const list = [];
  Object.keys(imprint).forEach((key) => {
    for (let amount of splitTable[imprint[key]]) {
      list.push({ key, amount });
    }
  });
  while (list.length < 10) {
    list.push({ key: '잡옵', amount: 3 });
  }

  const candidates: Imprint[] = [];
  for (let i = 0; i < list.length; i += 1) {
    for (let j = i + 1; j < list.length; j += 1) {
      if (list[i].key === list[j].key) {
        continue;
      }
      if (list[i].amount > 3 && list[j].amount > 3) {
        continue;
      }
      candidates.push({
        [list[i].key]: list[i].amount,
        [list[j].key]: list[j].amount,
      });
    }
  }

  return candidates;
}

export function getCombinations(imprint: Imprint, candidates: Imprint[]) {
  const result: Imprint[][] = [];
  function rec(obj: Imprint, comb: number[], s: number, d: number) {
    if (d === 5) {
      if (
        Object.values(obj).reduce((sum, x) => sum + Math.max(x, 0), 0) === 0
      ) {
        result.push(
          comb
            .map((x) => candidates[x])
            .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))
        );
      }
    }
    for (let i = s; i < candidates.length; i += 1) {
      const next = subtractRecord(obj, candidates[i]);
      if (!Object.values(next).find((x) => x <= -3)) {
        rec(next, [...comb, i], i + 1, d + 1);
      }
    }
    return result;
  }

  rec(imprint, [], 0, 0);

  return dedupe(result);
}
