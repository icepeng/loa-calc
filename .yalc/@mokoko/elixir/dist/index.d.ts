type CouncilLogicType = "mutateProb" | "mutateLuckyRatio" | "increaseTargetWithRatio" | "increaseTargetRanged" | "decreaseTurnLeft" | "shuffleAll" | "setEnchantTargetAndAmount" | "unsealAndSealOther" | "changeEffect" | "sealTarget" | "increaseReroll" | "decreasePrice" | "restart" | "setEnchantIncreaseAmount" | "setEnchantEffectCount" | "setValueRanged" | "redistributeAll" | "redistributeSelectedToOthers" | "shiftAll" | "swapValues" | "swapMinMax" | "exhaust" | "increaseMaxAndDecreaseTarget" | "increaseMinAndDecreaseTarget" | "redistributeMinToOthers" | "redistributeMaxToOthers" | "decreaseMaxAndSwapMinMax" | "decreaseFirstTargetAndSwap";
type CouncilTargetType = "none" | "random" | "proposed" | "maxValue" | "minValue" | "userSelect" | "lteValue" | "oneThreeFive" | "twoFour";
interface CouncilLogicData {
    type: CouncilLogicType;
    targetType: CouncilTargetType;
    targetCondition: number;
    targetCount: number;
    ratio: number;
    value: [number, number];
    remainTurn: number;
}
interface CouncilLogic {
    type: CouncilLogicType;
    ratio: number;
    value: [number, number];
    remainTurn: number;
}
type CouncilType = "common" | "lawful" | "lawfulSeal" | "seal" | "chaos" | "chaosSeal" | "exhausted";
interface Council {
    id: string;
    pickRatio: number;
    range: [number, number];
    descriptions: string[];
    type: CouncilType;
    slotType: 0 | 1 | 2 | 3;
    applyLimit: number;
    logics: CouncilLogicData[];
}

interface EffectState {
    name: string;
    value: number;
    isSealed: boolean;
}

interface Mutation {
    target: "prob" | "luckyRatio" | "enchantIncreaseAmount" | "enchantEffectCount";
    index: number;
    value: number;
    remainTurn: number;
}

type SageType = "none" | "lawful" | "chaos";
interface SageState {
    index: 0 | 1 | 2;
    type: SageType;
    power: number;
    isExhausted: boolean;
    councilId: string;
}

interface GameConfiguration {
    totalTurn: number;
    maxEnchant: number;
}
interface GameState {
    config: GameConfiguration;
    phase: "restart" | "council" | "enchant" | "done";
    turnLeft: number;
    rerollLeft: number;
    effects: EffectState[];
    mutations: Mutation[];
    sages: SageState[];
}

interface UiState {
    selectedSageIndex: number | null;
    selectedEffectIndex: number | null;
}

declare const api: {
    seedRng: (seed: number) => void;
    getCouncil: (id: string) => Council;
    getEffectLevel: (value: number) => number;
    getSageDescription: (state: GameState, sageIndex: number) => string;
    queryPickRatios: (state: GameState) => number[];
    queryLuckyRatios: (state: GameState) => number[];
    queryEnchantEffectCount: (state: GameState) => number;
    queryEnchantIncreaseAmount: (state: GameState) => number;
    getInitialGameState: (config: GameConfiguration) => GameState;
    isEffectSelectionRequired: (state: GameState, ui: UiState) => boolean;
    applyCouncil: (state: GameState, ui: UiState) => GameState;
    enchant: (state: GameState, ui: UiState) => GameState;
    reroll: (state: GameState) => GameState;
};
declare const data: {
    councils: readonly Council[];
};

interface BenchmarkOptions {
    selectionFn: (state: GameState) => UiState;
    scoreFn: (state: GameState) => number;
    iteration: number;
    config: GameConfiguration;
    seed: number;
}
declare function benchmark({ selectionFn, scoreFn, iteration, config, seed, }: BenchmarkOptions): {
    totalScore: number;
    iteration: number;
};

export { Council, CouncilLogic, CouncilLogicType, CouncilTargetType, CouncilType, EffectState, GameConfiguration, GameState, Mutation, SageState, SageType, UiState, api, benchmark, data };
