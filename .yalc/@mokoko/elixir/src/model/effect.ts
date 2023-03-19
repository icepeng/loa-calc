import { effectLevelTable, effectOptionsRecord } from "../data/effect";

export interface Effect {
  index: number;
  optionName: keyof typeof effectOptionsRecord;
  value: number;
  isSealed: boolean;
}

export interface EffectOption {
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

function setOptionName(effect: Effect, optionName: string): Effect {
  if (effect.isSealed) {
    throw new Error("Effect is sealed");
  }

  return {
    ...effect,
    optionName,
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

function getEffectOptionByName(name: string): EffectOption {
  const option = effectOptionsRecord[name];
  if (!option) {
    throw new Error(`Invalid effect option id: ${name}`);
  }

  return option;
}

function getEffectOptionDescriptionByNameAndLevel(name: string, level: number) {
  const option = getEffectOptionByName(name);
  return option.optionDescriptions[level];
}

const query = {
  isMutable,
  getLevel,
  getEffectOptionByName,
  getEffectOptionDescriptionByNameAndLevel,
};

export const Effect = {
  setValue,
  setOptionName,
  seal,
  unseal,
  query,
};
