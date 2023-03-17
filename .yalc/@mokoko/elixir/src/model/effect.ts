import { effectLevelTable, effectOptionsRecord } from "../data/effect";

export interface Effect {
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

// reducers
function setValue(effect: Effect, value: number): Effect {
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

function setOptionId(effect: Effect, optionId: string): Effect {
  if (effect.isSealed) {
    throw new Error("Effect is sealed");
  }

  return {
    ...effect,
    optionId,
  };
}

function seal(effect: Effect): Effect {
  if (effect.isSealed) {
    throw new Error("Effect is already sealed");
  }

  return {
    ...effect,
    isSealed: true,
  };
}

function unseal(effect: Effect): Effect {
  if (!effect.isSealed) {
    throw new Error("Effect is already unsealed");
  }

  return {
    ...effect,
    isSealed: false,
  };
}

// queries
function isMutable(effect: Effect, maxEnchant: number) {
  return effect.isSealed === false && effect.value < maxEnchant;
}

function getLevel(effect: Effect) {
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

const query = {
  isMutable,
  getLevel,
  getEffectOptionById,
  getEffectOptionNameById,
  getEffectOptionDescriptionByIdAndLevel,
};

export const Effect = {
  setValue,
  setOptionId,
  seal,
  unseal,
  query,
};
