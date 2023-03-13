export function clamp(value: number, max: number): number {
  return Math.min(Math.max(value, 0), max);
}
