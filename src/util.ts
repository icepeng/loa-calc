export function* product<T>(...vectors: T[][]): Generator<T[]> {
  const [head, ...tail] = vectors;
  const remainder = tail.length > 0 ? product(...tail) : [[]];
  for (let r of remainder) for (let h of head) yield [h, ...r];
}

export function* permutations<T>(
  elements: T[],
  length: number = elements.length
): Generator<T[]> {
  for (let i = 0; i < elements.length; i++) {
    if (length === 1) {
      yield [elements[i]];
    } else {
      const remaining = permutations(
        [...elements.slice(0, i), ...elements.slice(i + 1, elements.length)],
        length - 1
      );
      for (const next of remaining) {
        yield [elements[i], ...next];
      }
    }
  }
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
