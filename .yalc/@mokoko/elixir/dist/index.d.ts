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

declare const effectOptionsRecord: Record<string, EffectOption>;

interface EffectState {
    index: number;
    optionId: keyof typeof effectOptionsRecord;
    value: number;
    isSealed: boolean;
}
interface EffectOption {
    id: string;
    name: string;
    optionDescriptions: [string, string, string, string, string, string];
}
declare function isMutable(effect: EffectState, maxEnchant: number): boolean;
declare function getLevel(effect: EffectState): number;
declare function getEffectOptionById(id: string): EffectOption;
declare function getEffectOptionNameById(id: string): string;
declare function getEffectOptionDescriptionByIdAndLevel(id: string, level: number): string;
declare function setValue(effect: EffectState, value: number): {
    value: number;
    index: number;
    optionId: string;
    isSealed: boolean;
};
declare function setOption(effect: EffectState, option: EffectOption): {
    option: EffectOption;
    index: number;
    optionId: string;
    value: number;
    isSealed: boolean;
};
declare function seal(effect: EffectState): {
    isSealed: boolean;
    index: number;
    optionId: string;
    value: number;
};
declare function unseal(effect: EffectState): {
    isSealed: boolean;
    index: number;
    optionId: string;
    value: number;
};
declare const _default$3: {
    isMutable: typeof isMutable;
    getLevel: typeof getLevel;
    getEffectOptionById: typeof getEffectOptionById;
    getEffectOptionNameById: typeof getEffectOptionNameById;
    getEffectOptionDescriptionByIdAndLevel: typeof getEffectOptionDescriptionByIdAndLevel;
    setValue: typeof setValue;
    setOption: typeof setOption;
    seal: typeof seal;
    unseal: typeof unseal;
};

interface Mutation {
    target: "prob" | "luckyRatio" | "enchantIncreaseAmount" | "enchantEffectCount";
    index: number;
    value: number;
    remainTurn: number;
}
declare function createProbMutation(index: number, value: number, remainTurn: number): Mutation;
declare function createLuckyRatioMutation(index: number, value: number, remainTurn: number): Mutation;
declare function createEnchantIncreaseAmountMutation(value: number): Mutation;
declare function createEnchantEffectCountMutation(value: number): Mutation;
declare function passTurn$1(mutation: Mutation): {
    remainTurn: number;
    target: "prob" | "luckyRatio" | "enchantIncreaseAmount" | "enchantEffectCount";
    index: number;
    value: number;
};
declare const _default$2: {
    createProbMutation: typeof createProbMutation;
    createLuckyRatioMutation: typeof createLuckyRatioMutation;
    createEnchantIncreaseAmountMutation: typeof createEnchantIncreaseAmountMutation;
    createEnchantEffectCountMutation: typeof createEnchantEffectCountMutation;
    passTurn: typeof passTurn$1;
};

type SageType = "none" | "lawful" | "chaos";
interface SageState {
    index: 0 | 1 | 2;
    type: SageType;
    power: number;
    isExhausted: boolean;
    councilId: string;
}
declare function isLawfulFull(sage: SageState): boolean;
declare function isChaosFull(sage: SageState): boolean;
declare function updatePower(sage: SageState, selectedIndex: number): SageState;
declare function exhaust(sage: SageState): SageState;
declare function createInitialState$1(index: 0 | 1 | 2): SageState;
declare const _default$1: {
    isLawfulFull: typeof isLawfulFull;
    isChaosFull: typeof isChaosFull;
    updatePower: typeof updatePower;
    exhaust: typeof exhaust;
    createInitialState: typeof createInitialState$1;
};

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
declare function isEffectMutable(state: GameState, effectIndex: number): boolean;
declare function isEffectSealed(state: GameState, effectIndex: number): boolean;
declare function getEffectValue(state: GameState, effectIndex: number): number;
declare function checkSealNeeded(state: GameState): boolean;
declare function getCouncilType(state: GameState, sageIndex: number): CouncilType;
declare function isTurnInRange(state: GameState, [min, max]: [number, number]): boolean;
declare function createInitialState(config: GameConfiguration): GameState;
declare function markAsRestart(state: GameState): GameState;
declare function decreaseTurn(state: GameState, amount: number): GameState;
declare function passTurn(state: GameState, selectedSageIndex: number): GameState;
declare function increaseRerollLeft(state: GameState, amount: number): GameState;
declare function decreaseRerollLeft(state: GameState): GameState;
declare function exhaustSage(state: GameState, sageIndex: number): GameState;
declare function setEffectValue(state: GameState, effectIndex: number, value: number): GameState;
declare function setEffectValueAll(state: GameState, values: number[]): GameState;
declare function increaseEffectValue(state: GameState, effectIndex: number, diff: number): GameState;
declare function increaseEffectValueAll(state: GameState, diffs: number[]): GameState;
declare function sealEffect(state: GameState, effectIndex: number): GameState;
declare function unsealEffect(state: GameState, effectIndex: number): GameState;
declare function addMutations(state: GameState, mutations: Mutation[]): GameState;
declare const _default: {
    isEffectMutable: typeof isEffectMutable;
    isEffectSealed: typeof isEffectSealed;
    getEffectValue: typeof getEffectValue;
    checkSealNeeded: typeof checkSealNeeded;
    getCouncilType: typeof getCouncilType;
    isTurnInRange: typeof isTurnInRange;
    createInitialState: typeof createInitialState;
    markAsRestart: typeof markAsRestart;
    decreaseTurn: typeof decreaseTurn;
    passTurn: typeof passTurn;
    increaseRerollLeft: typeof increaseRerollLeft;
    decreaseRerollLeft: typeof decreaseRerollLeft;
    exhaustSage: typeof exhaustSage;
    setEffectValue: typeof setEffectValue;
    setEffectValueAll: typeof setEffectValueAll;
    increaseEffectValue: typeof increaseEffectValue;
    increaseEffectValueAll: typeof increaseEffectValueAll;
    sealEffect: typeof sealEffect;
    unsealEffect: typeof unsealEffect;
    addMutations: typeof addMutations;
};

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
        getUiSelectableEffects: (state: GameState, index: number) => EffectOption[];
        getEffectOptionCurrentDescription: (state: GameState, index: number) => string;
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
    effectOptions: readonly EffectOption[];
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

export { Council, CouncilLogic, CouncilLogicType, CouncilTargetType, CouncilType, EffectOption, EffectState, GameConfiguration, GameState, Mutation, SageState, SageType, UiState, api, benchmark, data, _default$3 as effect, _default as game, _default$2 as mutation, _default$1 as sage };
