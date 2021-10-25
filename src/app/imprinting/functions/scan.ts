import { Imprint } from './type';
import { combinations, combinationsWithReplacement } from './util';

export function getCandidates(
  target: Imprint,
  length: number,
  imprintLimit: number
) {
  const items = Array.from(combinations([...Object.keys(target), '잡옵'], 2));
  const combines = Array.from(combinationsWithReplacement(items, length));

  return combines.filter((combine) => {
    const objMin = { ...target };
    const objMax = { ...target };
    combine.forEach(([x, y]) => {
      objMin[x] -= imprintLimit;
      objMin[y] -= imprintLimit;
      objMax[x] -= 3;
      objMax[y] -= 3;
    });
    if (Object.values(objMin).find((x) => x > 0)) {
      return false;
    }
    if (Object.values(objMax).find((x) => x <= -3)) {
      return false;
    }
    return true;
  });
}

export function getCombinations(
  target: Imprint,
  combine: string[][],
  imprintLimit: number
) {
  const result: [string, number][][][] = [];
  const visited = new Set();
  function rec(left: Imprint, additions: [string, number][][]) {
    const hash = JSON.stringify(additions);
    if (visited.has(hash)) {
      return;
    }
    visited.add(hash);

    if (!Object.values(left).find((x) => x > 0)) {
      result.push(additions);
      return;
    }

    for (let i = 0; i < additions.length; i += 1) {
      const [a, b] = additions[i];
      if (b[1] === 3 && a[1] < imprintLimit && left[a[0]] > 0) {
        const next = [...additions];
        next[i] = [[a[0], a[1] + 1], b];
        rec({ ...left, [a[0]]: left[a[0]] - 1 }, next);
      }
      if (a[1] === 3 && b[1] < imprintLimit && left[b[0]] > 0) {
        const next = [...additions];
        next[i] = [a, [b[0], b[1] + 1]];
        rec({ ...left, [b[0]]: left[b[0]] - 1 }, next);
      }
    }
  }

  rec(
    combine.reduce(
      (obj, [a, b]) => {
        obj[a] -= 3;
        obj[b] -= 3;
        return obj;
      },
      { ...target }
    ),
    combine.map(([a, b]) => [
      [a, 3],
      [b, 3],
    ])
  );
  return result.map((res) => res.map((x) => Object.fromEntries(x)));
}
