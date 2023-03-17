import { EffectState } from "../model/effect";
import { RngService } from "./rng";

export function createEffectService(chance: RngService) {
  function pickMinValueIndex(effects: EffectState[]) {
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

  function pickMaxValueIndex(effects: EffectState[]) {
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

  return {
    pickMinValueIndex,
    pickMaxValueIndex,
  };
}

export type EffectService = ReturnType<typeof createEffectService>;
