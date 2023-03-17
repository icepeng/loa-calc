import { MAX_CHAOS, MAX_LAWFUL } from "../data/const";

export type SageType = "none" | "lawful" | "chaos";

export interface Sage {
  index: 0 | 1 | 2;
  type: SageType;
  power: number;
  isExhausted: boolean;
  councilId: string;
}

// constructors
function createInitialState(index: 0 | 1 | 2): Sage {
  return {
    index,
    type: "none",
    power: 0,
    isExhausted: false,
    councilId: "",
  };
}

// reducers
function updatePower(sage: Sage, selectedIndex: number): Sage {
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

function exhaust(sage: Sage): Sage {
  return {
    ...sage,
    isExhausted: true,
  };
}

// queries
function isLawfulFull(sage: Sage) {
  return sage.type === "lawful" && sage.power === MAX_LAWFUL;
}

function isChaosFull(sage: Sage) {
  return sage.type === "chaos" && sage.power === MAX_CHAOS;
}

const query = {
  isLawfulFull,
  isChaosFull,
};

export const Sage = {
  updatePower,
  exhaust,
  createInitialState,
  query,
};
