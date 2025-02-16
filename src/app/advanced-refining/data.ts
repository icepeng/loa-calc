export interface AdvancedRefineTable {
  successTable: Record<number, number[]>;
  amount: Record<string, number>;
  breath: Record<string, number>;
  book?: "장인의야금술1단계" | "장인의야금술2단계" | "장인의재봉술1단계" | "장인의재봉술2단계" | undefined;
}

export type AdvancedRefineTarget = 't3_0' | 't3_1' | 't4_0' | 't4_1' | 't4_2' | 't4_3';

// success rates per breath - T3
const successTableT3 = {
  0: [0.8, 0.15, 0.05],
  1: [0.7, 0.2, 0.1],
  2: [0.6, 0.25, 0.15],
  3: [0.5, 0.3, 0.2],
};

// success rates per breath - T4
// book is treated as +2 breaths
const successTableT4 = {
  0: [0.8, 0.15, 0.05],
  1: [0.5, 0.3, 0.2],
  2: [0.3, 0.45, 0.25],
  3: [0, 0.6, 0.4],
};

export const advancedRefineTable: Record<
  'armor' | 'weapon',
  Record<AdvancedRefineTarget, AdvancedRefineTable>
> = {
  armor: {
    t3_0: {
      successTable: successTableT3,
      amount: {
        정제된수호강석: 950,
        찬명돌: 22,
        최상급오레하: 18,
        파편: 5500,
        골드: 950,
      },
      breath: {
        은총: 24,
        축복: 12,
        가호: 4,
      },
    },
    t3_1: {
      successTable: successTableT3,
      amount: {
        정제된수호강석: 1300,
        찬명돌: 28,
        최상급오레하: 20,
        파편: 11000,
        골드: 1800,
      },
      breath: {
        은총: 36,
        축복: 18,
        가호: 6,
      },
    },
    t4_0: {
      successTable: successTableT4,
      amount: {
        운명의수호석: 500,
        운돌: 12,
        아비도스: 15,
        운명파편: 3000,
        골드: 950,
      },
      breath: {
        빙하: 12,
      },
      book: "장인의재봉술1단계",
    },
    t4_1: {
      successTable: successTableT4,
      amount: {
        운명의수호석: 900,
        운돌: 16,
        아비도스: 16,
        운명파편: 6000,
        골드: 1800,
      },
      breath: {
        빙하: 18,
      },
      book: "장인의재봉술2단계",
    },
    t4_2: {
      successTable: successTableT4,
      amount: {
        운명의수호석: 1000,
        운돌: 18,
        아비도스: 17,
        운명파편: 7000,
        골드: 2000,
      },
      breath: {
        빙하: 20,
      },
    },
    t4_3: {
      successTable: successTableT4,
      amount: {
        운명의수호석: 1200,
        운돌: 23,
        아비도스: 19,
        운명파편: 8000,
        골드: 2400,
      },
      breath: {
        빙하: 24,
      },
    },
  },
  weapon: {
    t3_0: {
      successTable: successTableT3,
      amount: {
        정제된파괴강석: 1000,
        찬명돌: 28,
        최상급오레하: 30,
        파편: 9000,
        골드: 1125,
      },
      breath: {
        은총: 24,
        축복: 12,
        가호: 4,
      },
    },
    t3_1: {
      successTable: successTableT3,
      amount: {
        정제된파괴강석: 1600,
        찬명돌: 36,
        최상급오레하: 33,
        파편: 17000,
        골드: 2500,
      },
      breath: {
        은총: 36,
        축복: 18,
        가호: 6,
      },
    },
    t4_0: {
      successTable: successTableT4,
      amount: {
        운명의파괴석: 600,
        운돌: 16,
        아비도스: 25,
        운명파편: 5000,
        골드: 1125,
      },
      breath: {
        용암: 12,
      },
      book: "장인의야금술1단계"
    },
    t4_1: {
      successTable: successTableT4,
      amount: {
        운명의파괴석: 1100,
        운돌: 22,
        아비도스: 27,
        운명파편: 10000,
        골드: 2500,
      },
      breath: {
        용암: 18,
      },
      book: "장인의야금술2단계"
    },
    t4_2: {
      successTable: successTableT4,
      amount: {
        운명의파괴석: 1200,
        운돌: 25,
        아비도스: 28,
        운명파편: 11500,
        골드: 3000,
      },
      breath: {
        용암: 20,
      },
    },
    t4_3: {
      successTable: successTableT4,
      amount: {
        운명의파괴석: 1400,
        운돌: 32,
        아비도스: 30,
        운명파편: 13000,
        골드: 4000,
      },
      breath: {
        용암: 24,
      },
    },
  },
};

export function getAdvancedRefineTable(
  type: 'armor' | 'weapon',
  target: AdvancedRefineTarget
): AdvancedRefineTable {
  return advancedRefineTable[type]?.[target];
}
