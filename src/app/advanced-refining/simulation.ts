const successTableT3 = {
  0: [0.8, 0.15, 0.05], // 기본 효과
  1: [0.7, 0.2, 0.1], // 숨결 1개 추가 (대성공 0.05, 대성공x2 0.05 증가)
  2: [0.6, 0.25, 0.15], // 숨결 2개 추가 (대성공 0.1, 대성공x2 0.1 증가)
  3: [0.5, 0.3, 0.2], // 숨결 3개 추가 (대성공 0.15, 대성공x2 0.15 증가)
  4: [0.3, 0.45, 0.25], // 재봉 or 야금 추가 (대성공 0.3, 대성공x2 0.2 증가)
  5: [0.2, 0.5, 0.3], // 숨결 1개 + 재봉 or 야금
  6: [0.1, 0.55, 0.35], // 숨결 2개 + 재봉 or 야금
  7: [0, 0.6, 0.4], // 숨결 3종류 + 재봉 or 야금
};

const successTableT4 = {
  0: [0.8, 0.15, 0.05], // 기본 효과
  1: [0.5, 0.3, 0.2], // 숨결 추가 효과 (대성공 0.15, 대성공x2 0.15 증가)
  2: [0.3, 0.45, 0.25], // 재봉,야금 추가 효과 (대성공 0.3, 대성공x2 0.2 증가)
  3: [0, 0.6, 0.4], // 숨결 + 재봉, 야금 추가 효과 (대성공 0.45, 대성공x2 0.35 증가)
};

const bonusTable01 = {
  갈라투르: 0.15,
  겔라르: 0.35,
  쿠훔바르: 0.15,
  테메르: 0.35,
  나베르: 0,
  에베르: 0,
};

const bonusTable23 = {
  갈라투르: 0.125,
  겔라르: 0.25,
  쿠훔바르: 0.125,
  테메르: 0.25,
  나베르: 0.125,
  에베르: 0.125,
};

const enhancedBonusTable = {
  갈라투르: 0.2,
  겔라르: 0.2,
  쿠훔바르: 0.2,
  테메르: 0.2,
  에베르: 0.2,
};

const MAX_EXP = 1000;

function run({
  normalSuccessTable,
  bonusSuccessTable,
  enhancedBonusSuccessTable,
  bonusTable,
}: {
  normalSuccessTable: number[];
  bonusSuccessTable: number[];
  enhancedBonusSuccessTable: number[];
  bonusTable: Record<string, number>;
}) {
  const normalSuccess0 = normalSuccessTable[0];
  const normalSuccess1 = normalSuccess0 + normalSuccessTable[1];
  const normalProc = [normalSuccess0, normalSuccess1];

  const bonusSuccess0 = bonusSuccessTable[0];
  const bonusSuccess1 = bonusSuccess0 + bonusSuccessTable[1];
  const bonusProc = [bonusSuccess0, bonusSuccess1];

  const enhancedBonusSuccess0 = enhancedBonusSuccessTable[0];
  const enhancedBonusSuccess1 =
    enhancedBonusSuccess0 + enhancedBonusSuccessTable[1];
  const enhancedBonusProc = [enhancedBonusSuccess0, enhancedBonusSuccess1];

  function getNormalExp(procTable: number[]) {
    const rand = Math.random();
    if (rand < procTable[0]) {
      return 10;
    }
    if (rand < procTable[1]) {
      return 20;
    }
    return 40;
  }

  const bonus0 = bonusTable.갈라투르;
  const bonus1 = bonus0 + bonusTable.겔라르;
  const bonus2 = bonus1 + bonusTable.쿠훔바르;
  const bonus3 = bonus2 + bonusTable.테메르;
  const bonus4 = bonus3 + bonusTable.나베르;
  function getBonus(prevExp: number, normalExp: number) {
    const rand = Math.random();
    if (rand < bonus0) {
      // 갈라투르
      return { exp: prevExp + normalExp * 5, stack: 0 };
    }
    if (rand < bonus1) {
      // 겔라르
      return { exp: prevExp + normalExp * 3, stack: 0 };
    }
    if (rand < bonus2) {
      // 쿠훔바르
      return { exp: prevExp + normalExp + 30, stack: 6 };
    }
    if (rand < bonus3) {
      // 테메르
      return { exp: prevExp + normalExp + 10, stack: 0, freeNext: true };
    }
    if (rand < bonus4) {
      // 나베르
      return { exp: prevExp + normalExp, stack: 6, enhanceNextBonus: true };
    }
    return {
      exp: Math.floor((prevExp + normalExp) / 100) * 100 + 100,
      stack: 0,
    }; // 에베르
  }

  const enhancedBonus0 = enhancedBonusTable.갈라투르;
  const enhancedBonus1 = enhancedBonus0 + enhancedBonusTable.겔라르;
  const enhancedBonus2 = enhancedBonus1 + enhancedBonusTable.쿠훔바르;
  const enhancedBonus3 = enhancedBonus2 + enhancedBonusTable.테메르;
  function getEnhancedBonus(prevExp: number, normalExp: number) {
    const rand = Math.random();
    if (rand < enhancedBonus0) {
      // 갈라투르
      return { exp: prevExp + normalExp * 7, stack: 0 };
    }
    if (rand < enhancedBonus1) {
      // 겔라르
      return { exp: prevExp + normalExp * 5, stack: 0 };
    }
    if (rand < enhancedBonus2) {
      // 쿠훔바르
      return { exp: prevExp + normalExp + 80, stack: 6 };
    }
    if (rand < enhancedBonus3) {
      // 테메르
      return { exp: prevExp + normalExp + 30, stack: 0, freeNext: true };
    }
    // 에베르
    return {
      exp: Math.floor((prevExp + normalExp) / 100) * 100 + 200,
      stack: 0,
    };
  }

  let stack = 0;
  let exp = 0;
  let enhanceNextBonus = false;
  let freeNext = false;

  let freeNormalTry = 0;
  let paidNormalTry = 0;
  let bonusTry = 0;
  let enhancedBonusTry = 0;
  while (exp < MAX_EXP) {
    if (stack === 6) {
      if (freeNext) {
        throw new Error('freeNext must be false in bonus try');
      }

      if (enhanceNextBonus) {
        enhanceNextBonus = false;
        enhancedBonusTry += 1;

        const result = getEnhancedBonus(exp, getNormalExp(enhancedBonusProc));
        exp = result.exp;
        stack = result.stack;
        freeNext = !!result.freeNext;
      } else {
        bonusTry += 1;

        const result = getBonus(exp, getNormalExp(bonusProc));
        exp = result.exp;
        stack = result.stack;
        freeNext = !!result.freeNext;
        enhanceNextBonus = !!result.enhanceNextBonus;
      }
    } else {
      if (enhanceNextBonus) {
        throw new Error('enhanceNextBonus must be false in normal try');
      }

      if (freeNext) {
        freeNext = false;
        freeNormalTry += 1;
      } else {
        paidNormalTry += 1;
      }
      exp += getNormalExp(normalProc);
      stack += 1;
    }
  }

  return {
    freeNormalTry,
    paidNormalTry,
    bonusTry,
    enhancedBonusTry,
  };
}

const ITERATION = 10000000;
const SUCCESS_TABLE = successTableT3;
const BONUS_TABLE = bonusTable01;
const HAS_ENHANCED_BONUS = false;

const report = [];
for (let normalK = 0; normalK < 8; normalK++) {
  for (let bonusK = 0; bonusK < 8; bonusK++) {
    for (
      let enhancedBonusK = 0;
      enhancedBonusK < (HAS_ENHANCED_BONUS ? 4 : 1);
      enhancedBonusK++
    ) {
      console.log(`Start ${normalK}, ${bonusK}, ${enhancedBonusK}`);

      const result = {
        freeNormalTry: 0,
        paidNormalTry: 0,
        bonusTry: 0,
        enhancedBonusTry: 0,
      };
      for (let i = 0; i < ITERATION; i++) {
        const res = run({
          normalSuccessTable: SUCCESS_TABLE[normalK],
          bonusSuccessTable: SUCCESS_TABLE[bonusK],
          enhancedBonusSuccessTable: SUCCESS_TABLE[enhancedBonusK],
          bonusTable: BONUS_TABLE,
        });
        result.freeNormalTry += res.freeNormalTry;
        result.paidNormalTry += res.paidNormalTry;
        result.bonusTry += res.bonusTry;
        result.enhancedBonusTry += res.enhancedBonusTry;
      }

      result.freeNormalTry /= ITERATION;
      result.paidNormalTry /= ITERATION;
      result.bonusTry /= ITERATION;
      result.enhancedBonusTry /= ITERATION;
      report.push({
        parameters: {
          normalK,
          bonusK,
          enhancedBonusK,
        },
        result,
      });
    }
  }
}

import * as fs from 'fs';

fs.writeFileSync('result.json', JSON.stringify(report, null, 2));
