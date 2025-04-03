import { t3_01, t4_01, t4_23 } from './simulated';

export interface AdvancedRefineTable {
  data: Array<{
    parameters: {
      normalK: number;
      bonusK: number;
      enhancedBonusK: number;
    };
    result: {
      freeNormalTry: number;
      paidNormalTry: number;
      bonusTry: number;
      enhancedBonusTry: number;
    };
  }>;
  hasEnhancedBonus: boolean;
  amount: Record<string, number>;
  breath: Record<string, number>;
  book?:
    | '장인의야금술1단계'
    | '장인의야금술2단계'
    | '장인의재봉술1단계'
    | '장인의재봉술2단계'
    | undefined;
}

export type AdvancedRefineTarget =
  | 't3_0'
  | 't3_1'
  | 't4_0'
  | 't4_1'
  | 't4_2'
  | 't4_3';

export const advancedRefineTable: Record<
  'armor' | 'weapon',
  Record<AdvancedRefineTarget, AdvancedRefineTable>
> = {
  armor: {
    t3_0: {
      data: t3_01,
      hasEnhancedBonus: false,
      amount: {
        정제된수호강석: 475,
        찬명돌: 11,
        최상급오레하: 9,
        파편: 4400,
        골드: 760,
      },
      breath: {
        은총: 12,
        축복: 6,
        가호: 2,
      },
      book: '장인의재봉술1단계',
    },
    t3_1: {
      data: t3_01,
      hasEnhancedBonus: false,
      amount: {
        정제된수호강석: 650,
        찬명돌: 14,
        최상급오레하: 10,
        파편: 8800,
        골드: 1440,
      },
      breath: {
        은총: 18,
        축복: 9,
        가호: 3,
      },
      book: '장인의재봉술2단계',
    },
    t4_0: {
      data: t4_01,
      hasEnhancedBonus: false,
      amount: {
        운명의수호석: 250,
        운돌: 6,
        아비도스: 7,
        운명파편: 2400,
        골드: 760,
      },
      breath: {
        빙하: 6,
      },
      book: '장인의재봉술1단계',
    },
    t4_1: {
      data: t4_01,
      hasEnhancedBonus: false,
      amount: {
        운명의수호석: 450,
        운돌: 8,
        아비도스: 8,
        운명파편: 4800,
        골드: 1440,
      },
      breath: {
        빙하: 9,
      },
      book: '장인의재봉술2단계',
    },
    t4_2: {
      data: t4_23,
      hasEnhancedBonus: true,
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
      data: t4_23,
      hasEnhancedBonus: true,
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
      data: t3_01,
      hasEnhancedBonus: false,
      amount: {
        정제된파괴강석: 500,
        찬명돌: 14,
        최상급오레하: 15,
        파편: 7200,
        골드: 900,
      },
      breath: {
        은총: 12,
        축복: 6,
        가호: 2,
      },
      book: '장인의야금술1단계',
    },
    t3_1: {
      data: t3_01,
      hasEnhancedBonus: false,
      amount: {
        정제된파괴강석: 800,
        찬명돌: 18,
        최상급오레하: 16,
        파편: 13600,
        골드: 2000,
      },
      breath: {
        은총: 18,
        축복: 9,
        가호: 3,
      },
      book: '장인의야금술2단계',
    },
    t4_0: {
      data: t4_01,
      hasEnhancedBonus: false,
      amount: {
        운명의파괴석: 300,
        운돌: 8,
        아비도스: 12,
        운명파편: 4000,
        골드: 900,
      },
      breath: {
        용암: 6,
      },
      book: '장인의야금술1단계',
    },
    t4_1: {
      data: t4_01,
      hasEnhancedBonus: false,
      amount: {
        운명의파괴석: 550,
        운돌: 11,
        아비도스: 13,
        운명파편: 8000,
        골드: 2000,
      },
      breath: {
        용암: 9,
      },
      book: '장인의야금술2단계',
    },
    t4_2: {
      data: t4_23,
      hasEnhancedBonus: true,
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
      data: t4_23,
      hasEnhancedBonus: true,
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
