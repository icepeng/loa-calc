export function addRecord(
  a: Record<string, number>,
  b: Record<string, number>
) {
  const result = { ...a };
  Object.entries(b).forEach(([key, value]) => {
    if (!result[key]) {
      result[key] = 0;
    }
    result[key] += value;
  });

  return result;
}

export function subtractRecord(
  a: Record<string, number>,
  b: Record<string, number>
) {
  return Object.fromEntries(
    Object.entries(a).map(([key, value]) => [key, value - (b[key] ?? 0)])
  );
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

  return result;
}

export function dedupe<T>(arr: T[]): T[] {
  return Array.from(new Set(arr.map((item) => JSON.stringify(item)))).map(
    (item) => JSON.parse(item)
  );
}

export function permutator<T>(inputArr: T[]) {
  const result: T[][] = [];

  const permute = (arr: T[], m: T[] = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
}

export function* combinations<T>(
  elements: T[],
  length: number
): Generator<T[]> {
  for (let i = 0; i < elements.length; i++) {
    if (length === 1) {
      yield [elements[i]];
    } else {
      const remaining = combinations(
        elements.slice(i + 1, elements.length),
        length - 1
      );
      for (const next of remaining) {
        yield [elements[i], ...next];
      }
    }
  }
}

export function* combinationsWithReplacement<T>(
  elements: T[],
  length: number
): Generator<T[]> {
  for (let i = 0; i < elements.length; i++) {
    if (length === 1) {
      yield [elements[i]];
    } else {
      const remaining = combinationsWithReplacement(
        elements.slice(i, elements.length),
        length - 1
      );
      for (const next of remaining) {
        yield [elements[i], ...next];
      }
    }
  }
}
