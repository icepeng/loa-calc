import { api } from "./api";
import { GameConfiguration, GameState } from "./model/game";
import { UiState } from "./model/ui";

interface BenchmarkOptions {
  selectionFn: (state: GameState, uiStateHistory: UiState[]) => UiState;
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
      console.log(`Iteration: ${i} Score: ${totalScore}`);
    }

    let state = api.game.getInitialGameState(config);
    let uiStateHistory: UiState[] = [];

    while (state.phase !== "done") {
      const uiState = selectionFn(state, uiStateHistory);
      state = api.game.applyCouncil(state, uiState);
      uiStateHistory.push(uiState);

      if (state.phase === "restart") {
        state = api.game.getInitialGameState(config);
        uiStateHistory = [];
        continue;
      }

      state = api.game.enchant(state, uiState);
    }

    totalScore += scoreFn(state);
  }

  return {
    totalScore,
    iteration,
  };
}
