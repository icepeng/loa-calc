import { Mutation } from "./mutation";
import { Sage } from "./sage";
import { Effect } from "./effect";
import { clamp } from "../util";
import { Council, CouncilType } from "./council";

export interface GameConfiguration {
  totalTurn: number;
  maxEnchant: number;
}

export interface GameState {
  config: GameConfiguration;
  phase: "restart" | "council" | "enchant" | "done";
  turnLeft: number;
  turnPassed: number;
  rerollLeft: number;
  effects: Effect[];
  mutations: Mutation[];
  sages: Sage[];
}

// constructor
function createInitialState(config: GameConfiguration): GameState {
  return {
    config,
    phase: "council",
    turnLeft: config.totalTurn,
    turnPassed: 0,
    rerollLeft: 2,
    effects: [
      {
        optionId: "12000",
        index: 0,
        value: 0,
        isSealed: false,
      },
      {
        optionId: "10101",
        index: 1,
        value: 0,
        isSealed: false,
      },
      {
        optionId: "10001",
        index: 2,
        value: 0,
        isSealed: false,
      },
      {
        optionId: "10106",
        index: 3,
        value: 0,
        isSealed: false,
      },
      {
        optionId: "10108",
        index: 4,
        value: 0,
        isSealed: false,
      },
    ],
    mutations: [],
    sages: [
      Sage.createInitialState(0),
      Sage.createInitialState(1),
      Sage.createInitialState(2),
    ],
  };
}

// reducers
// game
function markAsRestart(state: GameState): GameState {
  return {
    ...state,
    phase: "restart",
  };
}

function decreaseTurn(state: GameState, amount: number): GameState {
  if (state.turnLeft <= 0) {
    throw new Error("No turn left");
  }

  return {
    ...state,
    turnLeft: state.turnLeft - amount,
  };
}

function passTurn(state: GameState, selectedSageIndex: number): GameState {
  if (state.phase !== "enchant") {
    throw new Error("Invalid phase");
  }
  if (state.turnLeft <= 0) {
    throw new Error("No turn left");
  }

  const nextPhase = state.turnLeft === 1 ? "done" : "council";

  return {
    ...state,
    phase: nextPhase,
    turnLeft: state.turnLeft - 1,
    turnPassed: state.turnPassed + 1,
    mutations: state.mutations
      .map(Mutation.passTurn)
      .filter((mutation) => mutation.remainTurn > 0),
    sages: state.sages.map((sage) => Sage.updatePower(sage, selectedSageIndex)),
  };
}

function increaseRerollLeft(state: GameState, amount: number): GameState {
  return {
    ...state,
    rerollLeft: state.rerollLeft + amount,
  };
}

function decreaseRerollLeft(state: GameState): GameState {
  if (state.rerollLeft <= 0) {
    throw new Error("No reroll left");
  }

  return {
    ...state,
    rerollLeft: state.rerollLeft - 1,
  };
}

// sage
function exhaustSage(state: GameState, sageIndex: number): GameState {
  return {
    ...state,
    sages: state.sages.map((sage, index) =>
      index === sageIndex ? Sage.exhaust(sage) : sage
    ),
  };
}

// effect
function setEffectValue(
  state: GameState,
  effectIndex: number,
  value: number
): GameState {
  const clampedValue = clamp(value, state.config.maxEnchant);

  return {
    ...state,
    effects: state.effects.map((effect, index) =>
      index === effectIndex ? Effect.setValue(effect, clampedValue) : effect
    ),
  };
}

function setEffectValueAll(state: GameState, values: number[]): GameState {
  const clampedValues = values.map((value) =>
    clamp(value, state.config.maxEnchant)
  );

  return {
    ...state,
    effects: state.effects.map((effect, index) =>
      Effect.setValue(effect, clampedValues[index])
    ),
  };
}

function increaseEffectValue(
  state: GameState,
  effectIndex: number,
  diff: number
): GameState {
  const clampedValue = clamp(
    getEffectValue(state, effectIndex) + diff,
    state.config.maxEnchant
  );

  return {
    ...state,
    effects: state.effects.map((effect, index) =>
      index === effectIndex ? Effect.setValue(effect, clampedValue) : effect
    ),
  };
}

function increaseEffectValueAll(state: GameState, diffs: number[]): GameState {
  const clampedValues = diffs.map((diff, index) =>
    clamp(getEffectValue(state, index) + diff, state.config.maxEnchant)
  );

  return {
    ...state,
    effects: state.effects.map((effect, index) =>
      Effect.setValue(effect, clampedValues[index])
    ),
  };
}

function sealEffect(state: GameState, effectIndex: number): GameState {
  return {
    ...state,
    effects: state.effects.map((effect, index) =>
      index === effectIndex ? Effect.seal(effect) : effect
    ),
  };
}

function unsealEffect(state: GameState, effectIndex: number): GameState {
  return {
    ...state,
    effects: state.effects.map((effect, index) =>
      index === effectIndex ? Effect.unseal(effect) : effect
    ),
  };
}

// mutation
function addMutations(state: GameState, mutations: Mutation[]): GameState {
  return {
    ...state,
    mutations: [...state.mutations, ...mutations],
  };
}

// queries
// effect
function isEffectMutable(state: GameState, effectIndex: number): boolean {
  return Effect.query.isMutable(
    state.effects[effectIndex],
    state.config.maxEnchant
  );
}

function isEffectSealed(state: GameState, effectIndex: number): boolean {
  return state.effects[effectIndex].isSealed;
}

function getEffectValue(state: GameState, effectIndex: number): number {
  return state.effects[effectIndex].value;
}

function getEffectLevel(state: GameState, index: number): number {
  const effect = state.effects[index];
  return Effect.query.getLevel(effect);
}

function checkSealNeeded(state: GameState) {
  const sealedEffectCount = state.effects.filter(
    (effect) => effect.isSealed
  ).length;
  const toSeal = 3 - sealedEffectCount;

  return state.turnLeft <= toSeal;
}

// sage
function getCouncilType(state: GameState, sageIndex: number): CouncilType {
  const sage = state.sages[sageIndex];
  const isSealNeeded = checkSealNeeded(state);

  if (sage.isExhausted) {
    return "exhausted";
  }

  if (Sage.query.isLawfulFull(sage)) {
    if (isSealNeeded) {
      return "lawfulSeal";
    }

    return "lawful";
  }

  if (Sage.query.isChaosFull(sage)) {
    if (isSealNeeded) {
      return "chaosSeal";
    }

    return "chaos";
  }

  if (isSealNeeded) {
    return "seal";
  }

  return "common";
}

function isSageExhausted(state: GameState, sageIndex: number): boolean {
  return state.sages[sageIndex].isExhausted;
}

function isTurnInRange(state: GameState, [min, max]: [number, number]) {
  if (min === 0) {
    return true;
  }

  const turn = state.config.totalTurn - state.turnLeft + 1;
  return turn >= min && turn < max;
}

function getCouncilDescription(state: GameState, sageIndex: number) {
  const id = state.sages[sageIndex].councilId;
  const council = Council.query.getOne(id);
  if (!council) {
    throw new Error("Invalid council id");
  }
  const effectNames = state.effects.map((eff) =>
    Effect.query.getEffectOptionNameById(eff.optionId)
  );

  return council.descriptions[sageIndex]
    .replaceAll("{0}", effectNames[0])
    .replaceAll("{1}", effectNames[1])
    .replaceAll("{2}", effectNames[2])
    .replaceAll("{3}", effectNames[3])
    .replaceAll("{4}", effectNames[4]);
}

// mutation
function getPickRatios(state: GameState) {
  const mutableCount = [0, 1, 2, 3, 4].filter((index) =>
    isEffectMutable(state, index)
  ).length;

  const pickRatios = Array.from({ length: 5 }, (_, i) =>
    isEffectMutable(state, i) ? 1 / mutableCount : 0
  );

  if (mutableCount === 1) {
    return pickRatios;
  }

  const probMutations = state.mutations.filter(
    (mutation) => mutation.target === "prob"
  );

  for (const mutation of probMutations) {
    if (!isEffectMutable(state, mutation.index)) {
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

function getLuckyRatios(state: GameState) {
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

function getEnchantEffectCount(state: GameState) {
  return (
    state.mutations.find((mutation) => mutation.target === "enchantEffectCount")
      ?.value ?? 1
  );
}

function getEnchantIncreaseAmount(state: GameState) {
  return (
    state.mutations.find(
      (mutation) => mutation.target === "enchantIncreaseAmount"
    )?.value ?? 1
  );
}

// ui
function isEffectSelectionRequired(
  state: GameState,
  selectedSageIndex: number
): boolean {
  if (selectedSageIndex === null) {
    return false;
  }

  const sage = state.sages[selectedSageIndex];
  const logics = Council.query.getLogics(sage.councilId);

  return logics.some((logic) => logic.targetType === "userSelect");
}

function getSelectableSages(state: GameState): number[] {
  return state.sages
    .map((sage, index) => ({ sage, index }))
    .filter(({ sage }) => !sage.isExhausted)
    .map(({ index }) => index);
}

function getSelectableEffects(state: GameState): number[] {
  return state.effects
    .map((effect, index) => ({ effect, index }))
    .filter(({ effect }) => !effect.isSealed)
    .map(({ index }) => index);
}

const query = {
  isEffectMutable,
  isEffectSealed,
  getEffectValue,
  getEffectLevel,
  checkSealNeeded,
  getCouncilType,
  isTurnInRange,
  isSageExhausted,
  getCouncilDescription,
  getPickRatios,
  getLuckyRatios,
  getEnchantEffectCount,
  getEnchantIncreaseAmount,
  isEffectSelectionRequired,
  getSelectableSages,
  getSelectableEffects,
};

export const GameState = {
  query,
  createInitialState,
  markAsRestart,
  decreaseTurn,
  passTurn,
  increaseRerollLeft,
  decreaseRerollLeft,
  exhaustSage,
  setEffectValue,
  setEffectValueAll,
  increaseEffectValue,
  increaseEffectValueAll,
  sealEffect,
  unsealEffect,
  addMutations,
};
