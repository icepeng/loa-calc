import mutationEntity, { Mutation } from "./mutation";
import sageEntity, { SageState } from "./sage";
import effectEntity, { EffectState } from "./effect";
import { clamp } from "../util";
import { CouncilType } from "./council";

export interface GameConfiguration {
  totalTurn: number;
  maxEnchant: number;
}

export interface GameState {
  config: GameConfiguration;
  phase: "restart" | "council" | "enchant" | "done";
  turnLeft: number;
  rerollLeft: number;
  effects: EffectState[];
  mutations: Mutation[];
  sages: SageState[];
}

// getters
function isEffectMutable(state: GameState, effectIndex: number): boolean {
  return effectEntity.isMutable(
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

function checkSealNeeded(state: GameState) {
  const sealedEffectCount = state.effects.filter(
    (effect) => effect.isSealed
  ).length;
  const toSeal = 3 - sealedEffectCount;

  return state.turnLeft <= toSeal;
}

function getCouncilType(state: GameState, sageIndex: number): CouncilType {
  const sage = state.sages[sageIndex];
  const isSealNeeded = checkSealNeeded(state);

  if (sage.isExhausted) {
    return "exhausted";
  }

  if (sageEntity.isLawfulFull(sage)) {
    if (isSealNeeded) {
      return "lawfulSeal";
    }

    return "lawful";
  }

  if (sageEntity.isChaosFull(sage)) {
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

function isTurnInRange(state: GameState, [min, max]: [number, number]) {
  if (min === 0) {
    return true;
  }

  const turn = state.config.totalTurn - state.turnLeft + 1;
  return turn >= min && turn < max;
}

// setters
// game
function createInitialState(config: GameConfiguration): GameState {
  return {
    config,
    phase: "council",
    turnLeft: config.totalTurn,
    rerollLeft: 2,
    effects: [
      {
        name: "보스 피해",
        value: 0,
        isSealed: false,
      },
      {
        name: "무기 공격력",
        value: 0,
        isSealed: false,
      },
      {
        name: "민첩",
        value: 0,
        isSealed: false,
      },
      {
        name: "자원의 축복",
        value: 0,
        isSealed: false,
      },
      {
        name: "무력화",
        value: 0,
        isSealed: false,
      },
    ],
    mutations: [],
    sages: [
      sageEntity.createInitialState(0),
      sageEntity.createInitialState(1),
      sageEntity.createInitialState(2),
    ],
  };
}

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
    mutations: state.mutations
      .map(mutationEntity.passTurn)
      .filter((mutation) => mutation.remainTurn > 0),
    sages: state.sages.map((sage) =>
      sageEntity.updatePower(sage, selectedSageIndex)
    ),
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
      index === sageIndex ? sageEntity.exhaust(sage) : sage
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
      index === effectIndex
        ? effectEntity.setValue(effect, clampedValue)
        : effect
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
      effectEntity.setValue(effect, clampedValues[index])
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
      index === effectIndex
        ? effectEntity.setValue(effect, clampedValue)
        : effect
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
      effectEntity.setValue(effect, clampedValues[index])
    ),
  };
}

function sealEffect(state: GameState, effectIndex: number): GameState {
  return {
    ...state,
    effects: state.effects.map((effect, index) =>
      index === effectIndex ? effectEntity.seal(effect) : effect
    ),
  };
}

function unsealEffect(state: GameState, effectIndex: number): GameState {
  return {
    ...state,
    effects: state.effects.map((effect, index) =>
      index === effectIndex ? effectEntity.unseal(effect) : effect
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

export default {
  // getters
  isEffectMutable,
  isEffectSealed,
  getEffectValue,
  checkSealNeeded,
  getCouncilType,
  isTurnInRange,
  // setters
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
