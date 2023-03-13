import game, { GameState } from "../model/game";

export function createMutationService() {
  function queryPickRatios(state: GameState) {
    const mutableCount = [0, 1, 2, 3, 4].filter((index) =>
      game.isEffectMutable(state, index)
    ).length;

    const pickRatios = Array.from({ length: 5 }, (_, i) =>
      game.isEffectMutable(state, i) ? 1 / mutableCount : 0
    );

    if (mutableCount === 1) {
      return pickRatios;
    }

    const probMutations = state.mutations.filter(
      (mutation) => mutation.target === "prob"
    );

    for (const mutation of probMutations) {
      if (!game.isEffectMutable(state, mutation.index)) {
        continue;
      }

      const targetProb = pickRatios[mutation.index];
      const updatedProb = Math.max(Math.min(targetProb + mutation.value, 1), 0);
      const actualDiff = updatedProb - targetProb;

      for (let i = 0; i < 5; i += 1) {
        if (i === mutation.index) {
          pickRatios[i] = updatedProb;
        } else {
          pickRatios[i] = pickRatios[i] * (1 - actualDiff / (1 - targetProb));
        }
      }
    }

    return pickRatios;
  }

  function queryLuckyRatios(state: GameState) {
    const luckyRatios = Array.from({ length: 5 }, () => 0.1);

    const luckyRatioMutations = state.mutations.filter(
      (mutation) => mutation.target === "luckyRatio"
    );
    for (const mutation of luckyRatioMutations) {
      luckyRatios[mutation.index] = Math.max(
        Math.min(luckyRatios[mutation.index] + mutation.value, 1),
        0
      );
    }

    return luckyRatios;
  }

  function queryEnchantEffectCount(state: GameState) {
    return (
      state.mutations.find(
        (mutation) => mutation.target === "enchantEffectCount"
      )?.value ?? 1
    );
  }

  function queryEnchantIncreaseAmount(state: GameState) {
    return (
      state.mutations.find(
        (mutation) => mutation.target === "enchantIncreaseAmount"
      )?.value ?? 1
    );
  }

  return {
    queryPickRatios,
    queryLuckyRatios,
    queryEnchantEffectCount,
    queryEnchantIncreaseAmount,
  };
}

export type MutationService = ReturnType<typeof createMutationService>;
