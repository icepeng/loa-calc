import { api } from "./api";
import { GameConfiguration, GameState } from "./model/game";
import { UiState } from "./model/ui";

interface EnchantAction {
  type: "enchant";
  sageIndex: number;
  effectIndex: number | null;
}

interface RerollAction {
  type: "reroll";
}

export type Action = EnchantAction | RerollAction;

interface BenchmarkOptions {
  selectionFn: (state: GameState, uiStateHistory: UiState[]) => Action;
  scoreFn: (state: GameState) => number;
  iteration: number;
  config: GameConfiguration;
  seed: number;
}

export function benchmark({
  selectionFn,
  scoreFn,
  iteration,
  config,
  seed,
}: BenchmarkOptions) {
  api.rng.setSeed(seed);

  let totalScore: number = 0;
  for (let i = 0; i < iteration; i++) {
    if (i % 1000 === 0) {
      console.log(
        `Iteration: ${i} Score: ${totalScore} Ratio: ${totalScore / i}`
      );
    }

    let state = api.game.getInitialGameState(config);
    let uiStateHistory: UiState[] = [];

    while (state.phase !== "done") {
      const action = selectionFn(state, uiStateHistory);
      if (action.type === "reroll") {
        state = api.game.reroll(state);
        continue;
      }

      const uiState = {
        selectedSageIndex: action.sageIndex,
        selectedEffectIndex: action.effectIndex,
      };

      // console.log(state.sages.map((x) => x.councilId));
      // console.log(
      //   query.council.getOne(state.sages[action.sageIndex].councilId)
      // );
      state = api.game.applyCouncil(state, uiState);
      uiStateHistory.push(uiState);

      if (state.phase === "restart") {
        state = api.game.getInitialGameState(config);
        uiStateHistory = [];
        continue;
      }

      state = api.game.enchant(state, uiState);
      // console.log(state);
    }

    const sealedCount = state.effects.filter((x) => x.isSealed).length;
    if (sealedCount !== 3) {
      throw new Error("Effects are not sealed properly, count: " + sealedCount);
    }

    totalScore += scoreFn(state);
  }

  return {
    totalScore,
    iteration,
  };
}
