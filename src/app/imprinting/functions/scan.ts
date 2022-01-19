import { Imprint } from './type';
import { product } from '../../../util';

function splitNumber(num: number, limit: number): number[][] {
  const result: number[][] = [];
  function rec(arr: number[], sum: number) {
    if (sum === num) {
      result.push(arr);
      return;
    }
    if (sum > num) {
      if (arr[arr.length - 1] === 3) {
        result.push(arr);
      }
      return;
    }
    for (let i = arr[arr.length - 1] || 3; i <= limit; i += 1) {
      rec([...arr, i], sum + i);
    }
  }
  rec([], 0);
  return result;
}

function combine(splits: number[][], length: number, groupNames: string[]) {
  const arr = splits.flatMap((split, index) =>
    split.map((num) => ({ num, group: groupNames[index] }))
  );
  const result: Imprint[][] = [];
  const visited = new Set();

  function rec(
    list: Imprint[],
    used: Record<string, boolean>,
    si: number,
    sj: number
  ) {
    const hash = JSON.stringify(list);
    if (visited.has(hash)) {
      return;
    }
    visited.add(hash);

    if (list.length === length) {
      result.push(list);
      return;
    }

    for (let i = si; i < arr.length; i += 1) {
      if (used[i]) {
        continue;
      }

      const start =
        arr[si - 1]?.group === arr[i].group && arr[si - 1]?.num === arr[i].num
          ? sj
          : i + 1;
      for (let j = start; j < arr.length; j += 1) {
        if (arr[i].num > 3 && arr[j].num > 3) {
          continue;
        }
        if (used[j]) {
          continue;
        }
        if (arr[i].group !== arr[j].group) {
          rec(
            [
              ...list,
              {
                [arr[i].group]: arr[i].num,
                [arr[j].group]: arr[j].num,
              },
            ],
            { ...used, [i]: true, [j]: true },
            i + 1,
            j + 1
          );
        }
      }
    }
  }
  rec([], {}, 0, 0);
  return result;
}

export function getCombinations(
  target: Imprint,
  length: number,
  imprintLimit: number
) {
  return [
    ...product(
      ...Object.values(target).map((x) => splitNumber(x, imprintLimit))
    ),
  ]
    .filter((splits) => splits.flat().length <= length * 2)
    .filter((splits) => splits.flat().filter((num) => num > 3).length <= length)
    .map((splits) => {
      const padding = length * 2 - splits.flat().length;
      return [...splits, Array.from({ length: padding }, () => 3)];
    })
    .flatMap((splits) =>
      combine(splits, length, [...Object.keys(target), '잡옵'])
    );
}
