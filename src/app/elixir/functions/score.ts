import { data, GameState, query } from '../../../../.yalc/@mokoko/elixir';
import { councilConverter } from './index-converter';

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
  adviceCounting: number[][][][];
  curveRankRecord: Record<number, number[][]>;
  curveProbRecord: Record<number, number[]>;
}

export function createScoreCalculator({
  adviceCounting,
  curveRankRecord,
  curveProbRecord,
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

  function getAdviceScores(
    gameState: GameState,
    [firstIdx, secondIdx]: [number, number]
  ) {
    const values = gameState.effects.map((effect) =>
      effect.isSealed ? 0 : effect.value
    );
    const firstValue = values[firstIdx];
    const secondValue = values[secondIdx];

    const adviceScores = gameState.sages.map((sage) => {
      if (indexTable[sage.councilId] === -1) {
        return 0;
      }

      const convertedId = councilConverter(
        [firstIdx, secondIdx],
        sage.councilId
      );
      const convertedIndex = indexTable[convertedId];
      console.log(sage.index, sage.councilId);
      console.log(sage.index, convertedId);
      console.log(sage.index, query.council.getOne(convertedId));

      const a = adviceCounting[firstValue];
      const b = a[secondValue];
      const c = b[gameState.turnLeft - 1];

      if (requireSelect.includes(sage.councilId)) {
        return Math.max(
          ...[-5, -4, -3, -2, -1].map((i) => c[convertedIndex + i])
        );
      }

      return c[convertedIndex];
    });

    return adviceScores;
  }

  function getBaselineAdviceScore(
    gameState: GameState,
    targetIndices: [number, number]
  ) {
    const values = gameState.effects.map((effect) =>
      effect.isSealed ? 0 : effect.value
    );
    const [first, second] = targetIndices;
    const a = adviceCounting[values[first]];
    const b = a[values[second]];
    const c = b[gameState.turnLeft - 1];
    const councilIndex = indexTable['XR286C4T']; // 비용감소
    return c[councilIndex] / 2;
  }

  function calculateScores(
    gameState: GameState,
    currentCurve: number[],
    targetIndices: [number, number]
  ) {
    const sortedTargets = [...targetIndices].sort((a, b) => b - a) as [
      number,
      number
    ];
    const curveScores = getCurveScores(gameState, currentCurve);
    const adviceScores = getAdviceScores(gameState, sortedTargets);

    return {
      curveScores,
      adviceScores,
      totalScores: curveScores.map((curveScore, index) =>
        Math.cbrt(
          (curveScore + 0.001) * adviceScores[index] * adviceScores[index]
        )
      ),
    };
  }

  return {
    calculateScores,
    getBaselineAdviceScore,
  };
}
