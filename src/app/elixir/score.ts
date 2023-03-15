import { data, GameState } from '@mokoko/elixir';

function createIndexTable() {
  let i = 0;
  const table = {};
  data.councils.forEach((council) => {
    if (council.type !== 'exhausted' && council.logics[0].type !== 'restart') {
      table[council.id] = i;
      i += 1;
    } else {
      table[council.id] = -1;
    }
  });

  return table;
}

const indexTable = createIndexTable();

const requireSelect = [
  'a5gxIgIR',
  'gWvAL7v4',
  '6VmV1uPy',
  '0f1OGjTw',
  '7wgizvUn',
  '1Z2+BfwB',
  'q+a6jS9L',
  'l+rAEPKP',
  's+iwb0Rw',
  'CO+S24gs',
  'hVCN9GMr',
  'wCFQOzcX',
  'PkuGa1XV',
  '8Syfgx/g',
  '79o+kxjm',
  'X0RAe7B2',
  'KEO802/y',
  'zxpmYMXP',
  'vsB18riz',
];

interface ScoreCalculatorData {
  adviceCounting: number[][][][][][];
  curveRankRecord: Record<number, number[][]>;
  curveProbRecord: Record<number, number[]>;
  preIndexedCurveRank: Record<string, number>;
}

export function createScoreCalculator({
  adviceCounting,
  curveRankRecord,
  curveProbRecord,
  preIndexedCurveRank,
}: ScoreCalculatorData) {
  function getCurveScores(gameState: GameState, currentCurve: number[]) {
    const gameLength = gameState.turnLeft + gameState.turnPassed;
    const curveRank = curveRankRecord[Math.min(gameLength, 15)];
    const curveProb = curveProbRecord[Math.min(gameLength, 15)];

    const bestCurveIndexes = [0, 1, 2].map((nextIndex) =>
      curveRank.findIndex((curve) =>
        [...currentCurve, nextIndex].every(
          (value, index) => value === curve[index]
        )
      )
    );
    const curveScores = bestCurveIndexes.map((index) => curveProb[index]);
    return curveScores;
  }

  function getAdviceScores(gameState: GameState) {
    const adviceScores = gameState.sages.map((sage) => {
      const councilIndex = indexTable[sage.councilId];
      if (councilIndex === -1) {
        return 0;
      }

      const values = gameState.effects.map((effect) => effect.value);
      const a = adviceCounting[values[0]];
      const b = a[values[1]];
      const c = b[values[2]];
      const d = c[values[3]];
      const e = d[values[4]];

      if (requireSelect.includes(sage.councilId)) {
        return Math.max(
          ...[-5, -4, -3, -2, -1].map((i) => e[councilIndex + i])
        );
      }

      return e[councilIndex];
    });

    return adviceScores;
  }

  function calculateScores(gameState: GameState, currentCurve: number[]) {
    return {
      curveScores: getCurveScores(gameState, currentCurve),
      adviceScores: getAdviceScores(gameState),
    };
  }

  return {
    calculateScores,
  };
}
