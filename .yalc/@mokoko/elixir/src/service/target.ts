import { CouncilLogicData, CouncilTargetType } from "../model/council";
import game, { GameState } from "../model/game";
import { UiState } from "../model/ui";
import { RngService } from "./rng";

export function createTargetService(chance: RngService) {
  function none(state: GameState, ui: UiState, logic: CouncilLogicData) {
    return [];
  }

  function random(state: GameState, ui: UiState, logic: CouncilLogicData) {
    const available = [0, 1, 2, 3, 4].filter(
      (index) => !game.isEffectSealed(state, index)
    );

    return chance.pickset(available, logic.targetCount);
  }

  function proposed(state: GameState, ui: UiState, logic: CouncilLogicData) {
    return [logic.targetCondition - 1];
  }

  function minValue(state: GameState, ui: UiState, logic: CouncilLogicData) {
    const available = [0, 1, 2, 3, 4].filter(
      (index) => !game.isEffectSealed(state, index)
    );

    const minValue = Math.min(
      ...available.map((index) => state.effects[index].value)
    );

    const candidates = available.filter(
      (index) => state.effects[index].value === minValue
    );

    return chance.pickset(candidates, logic.targetCount);
  }

  function maxValue(state: GameState, ui: UiState, logic: CouncilLogicData) {
    const available = [0, 1, 2, 3, 4].filter(
      (index) => !game.isEffectSealed(state, index)
    );

    const maxValue = Math.max(
      ...available.map((index) => state.effects[index].value)
    );

    const candidates = available.filter(
      (index) => state.effects[index].value === maxValue
    );

    return chance.pickset(candidates, logic.targetCount);
  }

  function userSelect(state: GameState, ui: UiState, logic: CouncilLogicData) {
    if (ui.selectedEffectIndex == null) {
      throw new Error("Effect is not selected");
    }

    return [ui.selectedEffectIndex];
  }

  function lteValue(state: GameState, ui: UiState, logic: CouncilLogicData) {
    const available = [0, 1, 2, 3, 4].filter(
      (index) => !game.isEffectSealed(state, index)
    );

    return available.filter(
      (index) => state.effects[index].value <= logic.targetCondition
    );
  }

  function oneThreeFive(state: GameState) {
    return [0, 2, 4].filter((index) => !game.isEffectSealed(state, index));
  }

  function twoFour(state: GameState) {
    return [1, 3].filter((index) => !game.isEffectSealed(state, index));
  }

  const targetFns: Record<
    CouncilTargetType,
    (state: GameState, ui: UiState, logic: CouncilLogicData) => number[]
  > = {
    none,
    random,
    proposed,
    minValue,
    maxValue,
    userSelect,
    lteValue,
    oneThreeFive,
    twoFour,
  };

  function getTargets(
    state: GameState,
    ui: UiState,
    logic: CouncilLogicData
  ): number[] {
    return targetFns[logic.targetType](state, ui, logic);
  }

  return {
    getTargets,
  };
}

export type TargetService = ReturnType<typeof createTargetService>;
