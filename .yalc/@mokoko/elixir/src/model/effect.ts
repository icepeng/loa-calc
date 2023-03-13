import { effectLevelTable } from "../data/effect";

export interface EffectState {
  name: string;
  value: number;
  isSealed: boolean;
}

function isMutable(effect: EffectState, maxEnchant: number) {
  return effect.isSealed === false && effect.value < maxEnchant;
}

function getLevel(value: number) {
  if (value < 0 || value > 10) {
    throw new Error(`Invalid effect value: ${value}`);
  }

  return effectLevelTable[value as keyof typeof effectLevelTable];
}

function setValue(effect: EffectState, value: number) {
  if (effect.isSealed && effect.value !== value) {
    throw new Error("Effect is sealed");
  }
  if (value < 0) {
    throw new Error("Effect value must be positive");
  }

  return {
    ...effect,
    value,
  };
}

function seal(effect: EffectState) {
  if (effect.isSealed) {
    throw new Error("Effect is already sealed");
  }

  return {
    ...effect,
    isSealed: true,
  };
}

function unseal(effect: EffectState) {
  if (!effect.isSealed) {
    throw new Error("Effect is already unsealed");
  }

  return {
    ...effect,
    isSealed: false,
  };
}

export default {
  isMutable,
  getLevel,
  setValue,
  seal,
  unseal,
};
