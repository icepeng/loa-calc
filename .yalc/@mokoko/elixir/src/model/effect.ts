import { effectLevelTable, effectOptionsRecord } from "../data/effect";

export interface EffectState {
  index: number;
  optionId: keyof typeof effectOptionsRecord;
  value: number;
  isSealed: boolean;
}

export interface EffectOption {
  id: string;
  name: string;
  optionDescriptions: [string, string, string, string, string, string];
}

function isMutable(effect: EffectState, maxEnchant: number) {
  return effect.isSealed === false && effect.value < maxEnchant;
}

function getLevel(effect: EffectState) {
  const value = effect.value;
  if (value < 0 || value > 10) {
    throw new Error(`Invalid effect value: ${value}`);
  }

  return effectLevelTable[value as keyof typeof effectLevelTable];
}

function getEffectOptionById(id: string): EffectOption {
  const option = effectOptionsRecord[id];
  if (!option) {
    throw new Error(`Invalid effect option id: ${id}`);
  }

  return option;
}

function getEffectOptionNameById(id: string) {
  return getEffectOptionById(id).name;
}

function getEffectOptionDescriptionByIdAndLevel(id: string, level: number) {
  const option = getEffectOptionById(id);
  return option.optionDescriptions[level];
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

function setOption(effect: EffectState, option: EffectOption) {
  if (effect.isSealed) {
    throw new Error("Effect is sealed");
  }

  return {
    ...effect,
    option,
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
  getEffectOptionById,
  getEffectOptionNameById,
  getEffectOptionDescriptionByIdAndLevel,
  setValue,
  setOption,
  seal,
  unseal,
};
