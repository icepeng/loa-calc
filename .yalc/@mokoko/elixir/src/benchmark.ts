import { api } from "./api";
import { GameConfiguration, GameState } from "./model/game";
import { UiState } from "./model/ui";

interface BenchmarkOptions {
  selectionFn: (state: GameState) => UiState;
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
  api.seedRng(seed);

  let totalScore: number = 0;
  for (let i = 0; i < iteration; i++) {
    let state = api.getInitialGameState(config);

    while (state.phase !== "done") {
      const uiState = selectionFn(state);
      state = api.applyCouncil(state, uiState);

      if (state.phase === "restart") {
        state = api.getInitialGameState(config);
      }

      api.enchant(state, uiState);
    }

    totalScore += scoreFn(state);
  }

  return {
    totalScore,
    iteration,
  };
}
