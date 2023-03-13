import { Chance } from "chance";

export function createRngService() {
  let chance = new Chance();

  function setSeed(seed: number) {
    chance = new Chance(seed);
  }

  function bool(opts?: { likelihood: number }) {
    if (opts?.likelihood === 10000) {
      return true;
    }
    if (opts?.likelihood === 0) {
      return false;
    }
    return chance.bool(opts);
  }

  function pickone<T>(items: T[]) {
    return chance.pickone(items);
  }

  function pickset<T>(items: T[], size: number) {
    return chance.pickset(items, size);
  }

  function weighted<T>(items: T[], weights: number[]) {
    return chance.weighted(items, weights);
  }

  function integer({ min, max }: { min: number; max: number }) {
    return chance.integer({ min, max });
  }

  function shuffle<T>(arr: T[]): T[] {
    return chance.shuffle(arr);
  }

  return {
    setSeed,
    bool,
    pickone,
    pickset,
    weighted,
    integer,
    shuffle,
  };
}

export type RngService = ReturnType<typeof createRngService>;
