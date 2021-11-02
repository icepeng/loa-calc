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
