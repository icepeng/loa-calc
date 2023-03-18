declare function createProbMutation(index: number, value: number, remainTurn: number): Mutation;
declare function createLuckyRatioMutation(index: number, value: number, remainTurn: number): Mutation;
declare function createEnchantIncreaseAmountMutation(value: number): Mutation;
declare function createEnchantEffectCountMutation(value: number): Mutation;
declare function passTurn$1(mutation: Mutation): {
    remainTurn: number;
    target: "prob" | "luckyRatio" | "enchantIncreaseAmount" | "enchantEffectCount";
    index: number;
    value: number;
};interface Mutation {
    target: "prob" | "luckyRatio" | "enchantIncreaseAmount" | "enchantEffectCount";
    index: number;
    value: number;
    remainTurn: number;
}
declare const Mutation: {
    createProbMutation: typeof createProbMutation;
    createLuckyRatioMutation: typeof createLuckyRatioMutation;
    createEnchantIncreaseAmountMutation: typeof createEnchantIncreaseAmountMutation;
    createEnchantEffectCountMutation: typeof createEnchantEffectCountMutation;
    passTurn: typeof passTurn$1;
};

type SageType = "none" | "lawful" | "chaos";
declare function createInitialState$1(index: 0 | 1 | 2): Sage;
declare function updatePower(sage: Sage, selectedIndex: number): Sage;
declare function exhaust(sage: Sage): Sage;
declare function isLawfulFull(sage: Sage): boolean;
declare function isChaosFull(sage: Sage): boolean;
interface Sage {
    index: 0 | 1 | 2;
    type: SageType;
    power: number;
    isExhausted: boolean;
    councilId: string;
}
declare const Sage: {
    updatePower: typeof updatePower;
    exhaust: typeof exhaust;
    createInitialState: typeof createInitialState$1;
    query: {
        isLawfulFull: typeof isLawfulFull;
        isChaosFull: typeof isChaosFull;
    };
};

declare const effectOptionsRecord: Record<string, EffectOption>;

interface EffectOption {
    id: string;
    name: string;
    optionDescriptions: [string, string, string, string, string, string];
}
declare function setValue(effect: Effect, value: number): Effect;
declare function setOptionId(effect: Effect, optionId: string): Effect;
declare function seal(effect: Effect): Effect;
declare function unseal(effect: Effect): Effect;
declare function isMutable(effect: Effect, maxEnchant: number): boolean;
declare function getLevel(effect: Effect): number;
declare function getEffectOptionById(id: string): EffectOption;
declare function getEffectOptionNameById(id: string): string;
declare function getEffectOptionDescriptionByIdAndLevel(id: string, level: number): string;
interface Effect {
    index: number;
    optionId: keyof typeof effectOptionsRecord;
    value: number;
    isSealed: boolean;
}
declare const Effect: {
    setValue: typeof setValue;
    setOptionId: typeof setOptionId;
    seal: typeof seal;
    unseal: typeof unseal;
    query: {
        isMutable: typeof isMutable;
        getLevel: typeof getLevel;
        getEffectOptionById: typeof getEffectOptionById;
        getEffectOptionNameById: typeof getEffectOptionNameById;
        getEffectOptionDescriptionByIdAndLevel: typeof getEffectOptionDescriptionByIdAndLevel;
    };
};

interface GameConfiguration {
    totalTurn: number;
    maxEnchant: number;
}
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
declare function isEffectMutable(state: GameState, effectIndex: number): boolean;
declare function isEffectSealed(state: GameState, effectIndex: number): boolean;
declare function getEffectValue(state: GameState, effectIndex: number): number;
declare function getEffectLevel(state: GameState, index: number): number;
declare function checkSealNeeded(state: GameState): boolean;
declare function getCouncilType(state: GameState, sageIndex: number): CouncilType;
declare function isSageExhausted(state: GameState, sageIndex: number): boolean;
declare function isTurnInRange(state: GameState, [min, max]: [number, number]): boolean;
declare function getCouncilDescription(state: GameState, sageIndex: number): string;
declare function getPickRatios(state: GameState): number[];
declare function getLuckyRatios(state: GameState): number[];
declare function getEnchantEffectCount(state: GameState): number;
declare function getEnchantIncreaseAmount(state: GameState): number;
declare function isEffectSelectionRequired(state: GameState, selectedSageIndex: number): boolean;
declare function getSelectableSages(state: GameState): number[];
declare function getSelectableEffects(state: GameState): number[];
interface GameState {
    config: GameConfiguration;
    phase: "restart" | "council" | "enchant" | "done";
    turnLeft: number;
    turnPassed: number;
    rerollLeft: number;
    effects: Effect[];
    mutations: Mutation[];
    sages: Sage[];
}
declare const GameState: {
    query: {
        isEffectMutable: typeof isEffectMutable;
        isEffectSealed: typeof isEffectSealed;
        getEffectValue: typeof getEffectValue;
        getEffectLevel: typeof getEffectLevel;
        checkSealNeeded: typeof checkSealNeeded;
        getCouncilType: typeof getCouncilType;
        isTurnInRange: typeof isTurnInRange;
        isSageExhausted: typeof isSageExhausted;
        getCouncilDescription: typeof getCouncilDescription;
        getPickRatios: typeof getPickRatios;
        getLuckyRatios: typeof getLuckyRatios;
        getEnchantEffectCount: typeof getEnchantEffectCount;
        getEnchantIncreaseAmount: typeof getEnchantIncreaseAmount;
        isEffectSelectionRequired: typeof isEffectSelectionRequired;
        getSelectableSages: typeof getSelectableSages;
        getSelectableEffects: typeof getSelectableEffects;
    };
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
declare function isCouncilAvailable(state: GameState, council: Council, sageIndex: number, pickedCouncils: string[]): boolean;
declare function getOne(id: string): Council;
declare function getLogics(id: string): CouncilLogicData[];
declare function isIncludingLogicType(id: string, type: CouncilLogicType): boolean;
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
declare const Council: {
    query: {
        isCouncilAvailable: typeof isCouncilAvailable;
        getOne: typeof getOne;
        getLogics: typeof getLogics;
        isIncludingLogicType: typeof isIncludingLogicType;
    };
};

interface UiState {
    selectedSageIndex: number | null;
    selectedEffectIndex: number | null;
}

declare const query: {
    council: {
        isCouncilAvailable: (state: GameState, council: Council, sageIndex: number, pickedCouncils: string[]) => boolean;
        getOne: (id: string) => Council;
        getLogics: (id: string) => CouncilLogicData[];
        isIncludingLogicType: (id: string, type: CouncilLogicType) => boolean;
    };
    effect: {
        isMutable: (effect: Effect, maxEnchant: number) => boolean;
        getLevel: (effect: Effect) => number;
        getEffectOptionById: (id: string) => EffectOption;
        getEffectOptionNameById: (id: string) => string;
        getEffectOptionDescriptionByIdAndLevel: (id: string, level: number) => string;
    };
    game: {
        isEffectMutable: (state: GameState, effectIndex: number) => boolean;
        isEffectSealed: (state: GameState, effectIndex: number) => boolean;
        getEffectValue: (state: GameState, effectIndex: number) => number;
        getEffectLevel: (state: GameState, index: number) => number;
        checkSealNeeded: (state: GameState) => boolean;
        getCouncilType: (state: GameState, sageIndex: number) => CouncilType;
        isTurnInRange: (state: GameState, [min, max]: [number, number]) => boolean;
        isSageExhausted: (state: GameState, sageIndex: number) => boolean;
        getCouncilDescription: (state: GameState, sageIndex: number) => string;
        getPickRatios: (state: GameState) => number[];
        getLuckyRatios: (state: GameState) => number[];
        getEnchantEffectCount: (state: GameState) => number;
        getEnchantIncreaseAmount: (state: GameState) => number;
        isEffectSelectionRequired: (state: GameState, selectedSageIndex: number) => boolean;
        getSelectableSages: (state: GameState) => number[];
        getSelectableEffects: (state: GameState) => number[];
    };
    sage: {
        isLawfulFull: (sage: Sage) => boolean;
        isChaosFull: (sage: Sage) => boolean;
    };
};
declare const api: {
    game: {
        getInitialGameState: (config: GameConfiguration) => GameState;
        applyCouncil: (state: GameState, ui: UiState) => GameState;
        enchant: (state: GameState, ui: UiState) => GameState;
        reroll: (state: GameState) => GameState;
    };
    sage: {
        updateCouncils: (state: GameState) => GameState;
        rerollCouncils: (state: GameState) => GameState;
    };
    council: {
        pick: (state: GameState, sageIndex: number, pickedCouncils: string[]) => string;
    };
    logic: {
        runLogic: (state: GameState, logic: CouncilLogic, targets: number[]) => GameState;
    };
    target: {
        getTargets: (state: GameState, ui: UiState, logic: CouncilLogicData) => number[];
    };
    effect: {
        pickMinValueIndex: (effects: Effect[]) => number[];
        pickMaxValueIndex: (effects: Effect[]) => number[];
        getUiSelectableEffects: (state: GameState, index: number) => EffectOption[];
        getEffectOptionCurrentDescription: (state: GameState, index: number) => string;
    };
    rng: {
        setSeed: (seed: number) => void;
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

interface EnchantAction {
    type: "enchant";
    sageIndex: number;
    effectIndex: number | null;
}
interface RerollAction {
    type: "reroll";
}
type Action = EnchantAction | RerollAction;
interface BenchmarkOptions {
    selectionFn: (state: GameState, uiStateHistory: UiState[]) => Action;
    scoreFn: (state: GameState) => number;
    iteration: number;
    config: GameConfiguration;
    seed: number;
}
declare function benchmark({ selectionFn, scoreFn, iteration, config, seed, }: BenchmarkOptions): {
    totalScore: number;
    iteration: number;
};

export { Council, CouncilLogic, CouncilLogicData, CouncilLogicType, CouncilTargetType, CouncilType, Effect, EffectOption, GameConfiguration, GameState, Mutation, Sage, SageType, UiState, api, benchmark, data, query };
