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
    turnPassed: number;
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
    game: {
        getInitialGameState: (config: GameConfiguration) => GameState;
        getEffectLevel: (state: GameState, index: number) => number;
        getSelectableSages: (state: GameState) => number[];
        getSelectableEffects: (state: GameState) => number[];
        isEffectSelectionRequired: (state: GameState, ui: UiState) => boolean;
        applyCouncil: (state: GameState, ui: UiState) => GameState;
        enchant: (state: GameState, ui: UiState) => GameState;
        reroll: (state: GameState) => GameState;
    };
    sage: {
        updateCouncils: (state: GameState) => GameState;
        getDescription: (state: GameState, sageIndex: number) => string;
    };
    council: {
        pick: (state: GameState, sageIndex: number, pickedCouncils: string[]) => string;
        getOne: (id: string) => Council;
        getLogics: (id: string) => CouncilLogicData[];
    };
    logic: {
        runLogic: (state: GameState, logic: CouncilLogic, targets: number[]) => GameState;
    };
    target: {
        getTargets: (state: GameState, ui: UiState, logic: CouncilLogicData) => number[];
    };
    mutation: {
        queryPickRatios: (state: GameState) => number[];
        queryLuckyRatios: (state: GameState) => number[];
        queryEnchantEffectCount: (state: GameState) => number;
        queryEnchantIncreaseAmount: (state: GameState) => number;
    };
    effect: {
        pickMinValueIndex: (effects: EffectState[]) => number[];
        pickMaxValueIndex: (effects: EffectState[]) => number[];
    };
    rng: {
        setSeed: (seed: number) => void;
        getSeed: () => number;
        bool: (opts?: {
            likelihood: number;
        } | undefined) => boolean;
        pickone: <T>(items: T[]) => T;
        pickset: <T_1>(items: T_1[], size: number) => T_1[];
        weighted: <T_2>(items: T_2[], weights: number[]) => T_2;
        integer: ({ min, max }: {
            min: number;
            max: number;
        }) => number;
        shuffle: <T_3>(arr: T_3[]) => T_3[];
    };
};
declare const data: {
    councils: readonly Council[];
    effectLevelTable: {
        0: number;
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
        9: number;
        10: number;
    };
};

interface BenchmarkOptions {
    selectionFn: (state: GameState, uiStateHistory: UiState[]) => UiState;
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
