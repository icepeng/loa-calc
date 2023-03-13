export function cycle(n: number, mod: number, direction: 0 | 1) {
  if (direction === 0) {
    return (n + mod - 1) % mod;
  } else {
    return (n + 1) % mod;
  }
}
