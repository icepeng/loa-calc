export interface AdvancedRefineTable {
  amount: Record<string, number>;
  breath: Record<string, number>;
}

export const advancedRefineTable: Record<
  string,
  Record<number, AdvancedRefineTable>
> = {
  armor: {
    0: {
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
    1: {
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
  },
  weapon: {
    0: {
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
    1: {
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
  },
};

export function getAdvancedRefineTable(
  type: string,
  target: number
): AdvancedRefineTable | undefined {
  return advancedRefineTable[type]?.[target];
}
