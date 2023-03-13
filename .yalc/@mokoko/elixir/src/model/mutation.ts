export interface Mutation {
  target:
    | "prob"
    | "luckyRatio"
    | "enchantIncreaseAmount"
    | "enchantEffectCount";
  index: number;
  value: number;
  remainTurn: number;
}

function createProbMutation(
  index: number,
  value: number,
  remainTurn: number
): Mutation {
  return {
    target: "prob",
    index,
    value,
    remainTurn,
  };
}

function createLuckyRatioMutation(
  index: number,
  value: number,
  remainTurn: number
): Mutation {
  return {
    target: "luckyRatio",
    index,
    value,
    remainTurn,
  };
}

function createEnchantIncreaseAmountMutation(value: number): Mutation {
  return {
    target: "enchantIncreaseAmount",
    index: -1,
    value,
    remainTurn: 1,
  };
}

function createEnchantEffectCountMutation(value: number): Mutation {
  return {
    target: "enchantEffectCount",
    index: -1,
    value,
    remainTurn: 1,
  };
}

function passTurn(mutation: Mutation) {
  return {
    ...mutation,
    remainTurn: mutation.remainTurn - 1,
  };
}

export default {
  createProbMutation,
  createLuckyRatioMutation,
  createEnchantIncreaseAmountMutation,
  createEnchantEffectCountMutation,
  passTurn,
};
