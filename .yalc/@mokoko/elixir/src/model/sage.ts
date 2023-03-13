import { MAX_CHAOS, MAX_LAWFUL } from "../data/const";

export type SageType = "none" | "lawful" | "chaos";

export interface SageState {
  index: 0 | 1 | 2;
  type: SageType;
  power: number;
  isExhausted: boolean;
  councilId: string;
}

// getters
function isLawfulFull(sage: SageState) {
  return sage.type === "lawful" && sage.power === MAX_LAWFUL;
}

function isChaosFull(sage: SageState) {
  return sage.type === "chaos" && sage.power === MAX_CHAOS;
}

// setters
function updatePower(sage: SageState, selectedIndex: number): SageState {
  if (sage.type === "none") {
    if (sage.index === selectedIndex) {
      return { ...sage, type: "lawful", power: 1 };
    }
    return { ...sage, type: "chaos", power: 1 };
  }

  if (sage.type === "lawful") {
    if (sage.index === selectedIndex) {
      return {
        ...sage,
        type: "lawful",
        power: sage.power === MAX_LAWFUL ? 1 : sage.power + 1,
      };
    }

    return {
      ...sage,
      type: "chaos",
      power: 1,
    };
  }

  if (sage.type === "chaos") {
    if (sage.index === selectedIndex) {
      return { ...sage, type: "lawful", power: 1 };
    }

    return {
      ...sage,
      type: "chaos",
      power: sage.power === MAX_CHAOS ? 1 : sage.power + 1,
    };
  }

  throw new Error("Invalid sage type");
}

function exhaust(sage: SageState): SageState {
  return {
    ...sage,
    isExhausted: true,
  };
}

function createInitialState(index: 0 | 1 | 2): SageState {
  return {
    index,
    type: "none",
    power: 0,
    isExhausted: false,
    councilId: "",
  };
}

export default {
  isLawfulFull,
  isChaosFull,
  updatePower,
  exhaust,
  createInitialState,
};
