/**
 * This is based on the implementation of dolpago by Heehoon Kim https://heehoon.kim/dolpago
 */

export type Ability = 'ability1' | 'ability2' | 'penalty';

export type Sequence = [Ability, boolean][];

export type GoalCells = boolean[][];

export interface Goal {
  ability1: number;
  ability2: number;
  penalty: number;
  abilityTotal: number;
}

export interface Task {
  goal: Goal;
  goalCells: GoalCells;
  penaltyLimit: number;
}

export const PMAX = 6;

function idx(
  na: number,
  a: number,
  b: number,
  c: number,
  p: number,
  d: number,
  e: number,
  f: number
) {
  let na1 = na + 1;
  return (
    (((((a * na1 + b) * na1 + c) * PMAX + p) * na1 + d) * na1 + e) * na1 + f
  );
}

export function decodeP(p: number) {
  return 0.25 + p * 0.1;
}

function calProb1(
  na: number,
  dp: Float64Array,
  a: number,
  b: number,
  c: number,
  p: number,
  d: number,
  e: number,
  f: number
) {
  if (a === 0) return 0;
  const succ =
    d < na
      ? decodeP(p) * dp[idx(na, a - 1, b, c, Math.max(p - 1, 0), d + 1, e, f)]
      : 0;
  const fail =
    (1 - decodeP(p)) *
    dp[idx(na, a - 1, b, c, Math.min(p + 1, PMAX - 1), d, e, f)];
  return succ + fail;
}

function calProb2(
  na: number,
  dp: Float64Array,
  a: number,
  b: number,
  c: number,
  p: number,
  d: number,
  e: number,
  f: number
) {
  if (b === 0) return 0;
  const succ =
    e < na
      ? decodeP(p) * dp[idx(na, a, b - 1, c, Math.max(p - 1, 0), d, e + 1, f)]
      : 0;
  const fail =
    (1 - decodeP(p)) *
    dp[idx(na, a, b - 1, c, Math.min(p + 1, PMAX - 1), d, e, f)];
  return succ + fail;
}

function calProb3(
  na: number,
  dp: Float64Array,
  a: number,
  b: number,
  c: number,
  p: number,
  d: number,
  e: number,
  f: number
) {
  return c > 0
    ? (f === 0
        ? 0
        : decodeP(p) *
          dp[idx(na, a, b, c - 1, Math.max(p - 1, 0), d, e, f - 1)]) +
        (1 - decodeP(p)) *
          dp[idx(na, a, b, c - 1, Math.min(p + 1, PMAX - 1), d, e, f)]
    : 0;
}

export function calProb1Safe(
  na: number,
  dp: Float64Array,
  a: number,
  b: number,
  c: number,
  p: number,
  d: number,
  e: number,
  f: number
) {
  if (f < 0) return 0;
  return calProb1(na, dp, a, b, c, p, d, e, f);
}

export function calProb2Safe(
  na: number,
  dp: Float64Array,
  a: number,
  b: number,
  c: number,
  p: number,
  d: number,
  e: number,
  f: number
) {
  if (f < 0) return 0;
  return calProb2(na, dp, a, b, c, p, d, e, f);
}

export function calProb3Safe(
  na: number,
  dp: Float64Array,
  a: number,
  b: number,
  c: number,
  p: number,
  d: number,
  e: number,
  f: number
) {
  if (f < 0) return 0;
  return calProb3(na, dp, a, b, c, p, d, e, f);
}

export function cal_dp(na: number, goalCells: GoalCells) {
  const dp = new Float64Array((na + 1) ** 6 * PMAX); // initialized to 0
  for (let d = na; d >= 0; --d) {
    for (let a = 0; a <= na - d; ++a) {
      for (let e = na; e >= 0; --e) {
        for (let b = 0; b <= na - e; ++b) {
          for (let c = 0; c <= na; ++c) {
            for (let f = 0; f <= na; ++f) {
              for (let p = 0; p < PMAX; ++p) {
                let t;
                if (goalCells[d][e] && a === 0 && b === 0 && c <= f) {
                  t = 1;
                } else if (c < f) {
                  t = dp[idx(na, a, b, c, p, d, e, c)];
                } else {
                  t = Math.max(
                    0,
                    calProb1(na, dp, a, b, c, p, d, e, f),
                    calProb2(na, dp, a, b, c, p, d, e, f),
                    calProb3(na, dp, a, b, c, p, d, e, f)
                  );
                }
                dp[idx(na, a, b, c, p, d, e, f)] = t;
              }
            }
          }
        }
      }
    }
  }
  return dp;
}

export function getCurrentP(seq: Sequence) {
  let p = PMAX - 1;
  for (const attempt of seq) {
    if (!attempt[1]) {
      p = Math.min(p + 1, PMAX - 1);
    } else {
      p = Math.max(p - 1, 0);
    }
  }
  return p;
}

export function buildSymbols(
  seq: Sequence,
  num_attempts: number,
  type: Ability
) {
  const symbols: (boolean | null)[] = seq
    .filter((attempt) => attempt[0] === type)
    .map((attempt) => attempt[1]);
  while (symbols.length < num_attempts) {
    symbols.push(null);
  }
  return symbols;
}

export function getIdx(
  seq: Sequence,
  num_attempts: number,
  type: Ability
): [number, number] {
  let a = num_attempts;
  let success = 0;
  for (const attempt of seq) {
    if (attempt[0] === type) {
      --a;
      if (attempt[1]) {
        ++success;
      }
    }
  }
  return [a, success];
}

export function toPercent(x: number) {
  x *= 100;
  return x === 0
    ? '0%'
    : x.toFixed(Math.max(2 - Math.floor(Math.log(x) / Math.log(10)), 0)) + '%';
}

export function getGoalCellsFromGoal(na: number, goal: Goal) {
  const num_attempts = na;
  const goalCells: GoalCells = [];
  for (let i = 0; i <= num_attempts; ++i) {
    const t: boolean[] = [];
    for (let j = 0; j <= num_attempts; ++j) {
      t.push(
        i >= goal.ability1 && j >= goal.ability2 && i + j >= goal.abilityTotal
      );
    }
    goalCells.push(t);
  }
  return goalCells;
}

export function getTaskPreset(na: number, id: number): Task {
  if (id === 0) {
    const goal = {
      ability1: 0,
      ability2: 0,
      penalty: 4,
      abilityTotal: 14,
    };
    const goalCells = getGoalCellsFromGoal(na, goal);
    const penaltyLimit = goal.penalty;
    if (na >= 8) {
      goalCells[8][6] = false;
      goalCells[6][8] = false;
    }

    return {
      goal,
      goalCells,
      penaltyLimit,
    };
  }
  if (id === 1) {
    const goal = {
      ability1: 0,
      ability2: 0,
      penalty: 4,
      abilityTotal: 16,
    };
    const goalCells = getGoalCellsFromGoal(na, goal);
    const penaltyLimit = goal.penalty;
    if (na >= 8) {
      goalCells[8][8] = false;
    }

    return {
      goal,
      goalCells,
      penaltyLimit,
    };
  }
  throw new Error('Invalid id');
}
