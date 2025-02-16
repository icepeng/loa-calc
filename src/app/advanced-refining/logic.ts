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

const bonusTable = {
  갈라투르: 0.15,
  겔라르: 0.35,
  쿠훔바르: 0.15,
  테메르: 0.35,
};

function getAverageNormalExp(
  breathCount: number,
  successTable: Record<number, number[]>
) {
  const [성공, 대성공, 대성공2] = successTable[breathCount];

  return 성공 * 10 + 대성공 * 20 + 대성공2 * 40;
}

function getAverageBonusExp(
  breathCount: number,
  successTable: Record<number, number[]>
) {
  const base = getAverageNormalExp(breathCount, successTable);

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

function getBookWithPrice(
  refineTable: AdvancedRefineTable,
  priceTable: Record<string, number>
) {
  return refineTable.book
    ? {
        name: refineTable.book,
        amount: 1,
        price: priceTable[refineTable.book],
      }
    : undefined;
}

function getExpectedTryCount(
  refineTable: AdvancedRefineTable,
  breathCounts: { normal: number; bonus: number },
  bookCounts: { normal: 0 | 1; bonus: 0 | 1 }
) {
  const exp =
    getAverageNormalExp(
      breathCounts.normal + bookCounts.normal * 2,
      refineTable.successTable
    ) *
      (1 - BONUS_RATE) +
    getAverageBonusExp(
      breathCounts.bonus + bookCounts.bonus * 2,
      refineTable.successTable
    ) *
      BONUS_RATE;

  return TOTAL_EXP / exp;
}

function getExpectedPricePerTry(
  refineTable: AdvancedRefineTable,
  priceTable: Record<string, number>,
  breathCounts: {
    normal: number;
    bonus: number;
  },
  bookCounts: {
    normal: 0 | 1;
    bonus: 0 | 1;
  }
) {
  const sortedBreath = getSortedBreathByPrice(refineTable, priceTable);
  const book = getBookWithPrice(refineTable, priceTable);
  const basePrice = getBasePrice(refineTable, priceTable);

  const pricePerNormalTry =
    basePrice * (1 - FREE_RATE) +
    sortedBreath
      .slice(0, breathCounts.normal)
      .reduce((sum, x) => sum + x.price, 0) +
    (book ? bookCounts.normal * book.price : 0);
  const pricePerBonusTry =
    basePrice +
    sortedBreath
      .slice(0, breathCounts.bonus)
      .reduce((sum, x) => sum + x.price, 0) +
    (book ? bookCounts.bonus * book.price : 0);

  return {
    pricePerNormalTry,
    pricePerBonusTry,
    expectedPricePerTry:
      pricePerNormalTry * (1 - BONUS_RATE) + pricePerBonusTry * BONUS_RATE,
  };
}

export function getReport(
  refineTable: AdvancedRefineTable,
  priceTable: Record<string, number>
): AdvancedRefineReport[] {
  const result = [];
  const sortedBreath = getSortedBreathByPrice(refineTable, priceTable);
  const book = getBookWithPrice(refineTable, priceTable);
  const maxBreathCount = Object.keys(refineTable.breath).length as 3 | 1;

  for (let normalBreath = 0; normalBreath <= maxBreathCount; normalBreath++) {
    for (let bonusBreath = 0; bonusBreath <= maxBreathCount; bonusBreath++) {
      for (
        let normalBook = 0 as 0 | 1;
        normalBook <= (book ? 1 : 0);
        normalBook++
      ) {
        for (
          let bonusBook = 0 as 0 | 1;
          bonusBook <= (book ? 1 : 0);
          bonusBook++
        ) {
          const expectedTryCount = getExpectedTryCount(
            refineTable,
            {
              normal: normalBreath,
              bonus: bonusBreath,
            },
            {
              normal: normalBook,
              bonus: bonusBook,
            }
          );
          const { pricePerBonusTry, pricePerNormalTry, expectedPricePerTry } =
            getExpectedPricePerTry(
              refineTable,
              priceTable,
              {
                normal: normalBreath,
                bonus: bonusBreath,
              },
              {
                normal: normalBook,
                bonus: bonusBook,
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
            normalBreathNames: [
              ...sortedBreath.slice(0, normalBreath).map((x) => x.name),
              ...(normalBook ? [book!.name] : []),
            ],
            bonusBreathNames: [
              ...sortedBreath.slice(0, bonusBreath).map((x) => x.name),
              ...(bonusBook ? [book!.name] : []),
            ],
            expectedTryCount,
            pricePerNormalTry,
            pricePerBonusTry,
            expectedPrice: expectedTryCount * expectedPricePerTry,
            expectedMaterials,
          });
        }
      }
    }
  }

  return result.sort((a, b) => a.expectedPrice - b.expectedPrice);
}
