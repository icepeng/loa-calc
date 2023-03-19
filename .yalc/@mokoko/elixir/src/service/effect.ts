import { effectOptions } from "../data/effect";
import { Effect } from "../model/effect";
import { GameState } from "../model/game";
import { RngService } from "./rng";

export function createEffectService(chance: RngService) {
  function pickMinValueIndex(effects: Effect[]) {
    const values = effects
      .filter((eff) => !eff.isSealed)
      .map((eff) => eff.value);
    const min = Math.min(...values);
    const minIndexes = [0, 1, 2, 3, 4].filter(
      (index) => effects[index].value === min && !effects[index].isSealed
    );

    const pickedMin = chance.pickone(minIndexes);

    return [min, pickedMin];
  }

  function pickMaxValueIndex(effects: Effect[]) {
    const values = effects
      .filter((eff) => !eff.isSealed)
      .map((eff) => eff.value);
    const max = Math.max(...values);
    const maxIndexes = [0, 1, 2, 3, 4].filter(
      (index) => effects[index].value === max && !effects[index].isSealed
    );

    const pickedMax = chance.pickone(maxIndexes);

    return [max, pickedMax];
  }

  function getUiSelectableEffects(state: GameState, index: number) {
    const otherSelectedEffectIds = state.effects
      .filter((eff) => eff.index !== index)
      .map((eff) => eff.optionName);

    return effectOptions.filter(
      (eff) => !otherSelectedEffectIds.includes(eff.name)
    );
  }

  function getEffectOptionCurrentDescription(state: GameState, index: number) {
    const eff = state.effects[index];
    const option = Effect.query.getEffectOptionByName(eff.optionName);
    const level = Effect.query.getLevel(eff);
    return option.optionDescriptions[level];
  }

  return {
    pickMinValueIndex,
    pickMaxValueIndex,
    getUiSelectableEffects,
    getEffectOptionCurrentDescription,
  };
}

export type EffectService = ReturnType<typeof createEffectService>;
