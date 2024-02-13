import { AdvancedRefineTable } from './data';

const FREE_RATE = (1 / 6) * 0.35;
const BONUS_RATE = 0.16106;
const TOTAL_EXP = 1000;

export interface AdvancedRefineReport {
  normalBreathNames: string[];
  bonusBreathNames: string[];
  expectedTryCount: number;
  expectedPrice: number;
  expectedMaterials: { name: string; amount: number }[];
}

// success rates per breath
const successTable = {
  0: [0.8, 0.15, 0.05],
  1: [0.7, 0.2, 0.1],
  2: [0.6, 0.25, 0.15],
  3: [0.5, 0.3, 0.2],
};

const bonusTable = {
  갈라투르: 0.15,
  겔라르: 0.35,
  쿠훔바르: 0.15,
  테메르: 0.35,
};

function getAverageNormalExp(breathCount: number) {
  const [성공, 대성공, 대성공2] = successTable[breathCount];

  return 성공 * 10 + 대성공 * 20 + 대성공2 * 40;
}

function getAverageBonusExp(breathCount: number) {
  const base = getAverageNormalExp(breathCount);

  const 갈라투르 = base * 5;
  const 겔라르 = base * 3;
  const 쿠훔바르 = base + 30;
  const 테메르 = base + 10;

  return (
    갈라투르 * bonusTable.갈라투르 +
    겔라르 * bonusTable.겔라르 +
    쿠훔바르 * bonusTable.쿠훔바르 +
    테메르 * bonusTable.테메르
  );
}

function getBasePrice(
  refineTable: AdvancedRefineTable,
  priceTable: Record<string, number>
) {
  return Object.entries(refineTable.amount)
    .map(([name, amount]) => priceTable[name] * amount)
    .reduce((sum, x) => sum + x, 0);
}

function getSortedBreathByPrice(
  refineTable: AdvancedRefineTable,
  priceTable: Record<string, number>
) {
  return Object.entries(refineTable.breath)
    .map(([name, amount]) => ({
      name,
      amount,
      price: priceTable[name] * amount,
    }))
    .sort((a, b) => a.price - b.price);
}

function getExpectedTryCount(breathCounts: { normal: number; bonus: number }) {
  const exp =
    getAverageNormalExp(breathCounts.normal) * (1 - BONUS_RATE) +
    getAverageBonusExp(breathCounts.bonus) * BONUS_RATE;

  return TOTAL_EXP / exp;
}

function getExpectedPricePerTry(
  refineTable: AdvancedRefineTable,
  priceTable: Record<string, number>,
  breathCounts: {
    normal: number;
    bonus: number;
  }
) {
  const sortedBreath = getSortedBreathByPrice(refineTable, priceTable);
  const basePrice = getBasePrice(refineTable, priceTable);

  const normalPrice =
    basePrice * (1 - FREE_RATE) +
    sortedBreath
      .slice(0, breathCounts.normal)
      .reduce((sum, x) => sum + x.price, 0);
  const bonusPrice =
    basePrice +
    sortedBreath
      .slice(0, breathCounts.bonus)
      .reduce((sum, x) => sum + x.price, 0);

  return normalPrice * (1 - BONUS_RATE) + bonusPrice * BONUS_RATE;
}

export function getReport(
  refineTable: AdvancedRefineTable,
  priceTable: Record<string, number>
): AdvancedRefineReport[] {
  const result = [];
  const sortedBreath = getSortedBreathByPrice(refineTable, priceTable);

  for (let normalBreath = 0; normalBreath <= 3; normalBreath++) {
    for (let bonusBreath = 0; bonusBreath <= 3; bonusBreath++) {
      const expectedTryCount = getExpectedTryCount({
        normal: normalBreath,
        bonus: bonusBreath,
      });
      const expectedPricePerTry = getExpectedPricePerTry(
        refineTable,
        priceTable,
        {
          normal: normalBreath,
          bonus: bonusBreath,
        }
      );

      const expectedMaterials = [
        ...Object.entries(refineTable.amount).map(([name, amount]) => ({
          name,
          amount:
            amount *
            expectedTryCount *
            ((1 - BONUS_RATE) * (1 - FREE_RATE) + BONUS_RATE),
        })),
        ...sortedBreath.map((x, index) => {
          const normalAmount = index < normalBreath ? x.amount : 0;
          const bonusAmount = index < bonusBreath ? x.amount : 0;

          return {
            name: x.name,
            amount:
              (normalAmount * (1 - BONUS_RATE) + bonusAmount * BONUS_RATE) *
              expectedTryCount,
          };
        }),
      ];

      result.push({
        normalBreathNames: sortedBreath
          .slice(0, normalBreath)
          .map((x) => x.name),
        bonusBreathNames: sortedBreath.slice(0, bonusBreath).map((x) => x.name),
        expectedTryCount,
        expectedPrice: expectedTryCount * expectedPricePerTry,
        expectedMaterials,
      });
    }
  }

  return result.sort((a, b) => a.expectedPrice - b.expectedPrice);
}
