import { Council } from "../model/council";
import { Effect } from "../model/effect";
import { GameConfiguration, GameState } from "../model/game";
import { UiState } from "../model/ui";
import { LogicService } from "./logic";
import { RngService } from "./rng";
import { SageService } from "./sage";
import { TargetService } from "./target";

export function createGameService(
  chance: RngService,
  sageService: SageService,
  logicService: LogicService,
  targetService: TargetService
) {
  function getInitialGameState(config: GameConfiguration): GameState {
    const state = GameState.createInitialState(config);
    return sageService.updateCouncils(state);
  }

  function isEffectSelectionRequired(state: GameState, ui: UiState): boolean {
    if (ui.selectedSageIndex === null) {
      return false;
    }

    const sage = state.sages[ui.selectedSageIndex];
    const logics = Council.query.getLogics(sage.councilId);

    return logics.some((logic) => logic.targetType === "userSelect");
  }

  function getEffectLevel(state: GameState, index: number): number {
    const effect = state.effects[index];
    return Effect.query.getLevel(effect);
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

  function applyCouncil(state: GameState, ui: UiState): GameState {
    if (ui.selectedSageIndex === null) {
      throw new Error("Sage is not selected");
    }
    if (
      isEffectSelectionRequired(state, ui) &&
      ui.selectedEffectIndex == null
    ) {
      throw new Error("Effect is not selected");
    }

    const sage = state.sages[ui.selectedSageIndex];
    const logics = Council.query.getLogics(sage.councilId);

    const counciledState = logics.reduce(
      (acc, logic) =>
        logicService.runLogic(
          acc,
          logic,
          targetService.getTargets(acc, ui, logic)
        ),
      state
    );

    const nextPhase =
      counciledState.phase === "restart" ? "restart" : "enchant";

    return {
      ...counciledState,
      phase: nextPhase,
    };
  }

  function enchant(state: GameState, ui: UiState): GameState {
    if (ui.selectedSageIndex === null) {
      throw new Error("Sage is not selected");
    }

    const enchantEffectCount = GameState.query.getEnchantEffectCount(state);
    const enchantIncreaseAmount =
      GameState.query.getEnchantIncreaseAmount(state);
    const luckyRatios = GameState.query.getLuckyRatios(state);
    const pickRatios = GameState.query.getPickRatios(state);

    let nextState = state;
    for (let i = 0; i < enchantEffectCount; i += 1) {
      if (pickRatios.every((ratio) => ratio === 0)) {
        break;
      }
      const selectedEffectIndex = chance.weighted([0, 1, 2, 3, 4], pickRatios);
      pickRatios[selectedEffectIndex] = 0;

      const luckyRatio = luckyRatios[selectedEffectIndex];
      const isLucky = chance.bool({ likelihood: luckyRatio * 100 });

      state = GameState.increaseEffectValue(
        nextState,
        selectedEffectIndex,
        enchantIncreaseAmount + (isLucky ? 1 : 0)
      );
    }

    nextState = GameState.passTurn(state, ui.selectedSageIndex);

    if (nextState.phase === "done") {
      return nextState;
    }
    return sageService.updateCouncils(nextState);
  }

  function reroll(state: GameState): GameState {
    if (state.rerollLeft <= 0) {
      throw new Error("No reroll left");
    }

    return sageService.updateCouncils(GameState.decreaseRerollLeft(state));
  }
  return {
    getInitialGameState,
    getEffectLevel,
    getSelectableSages,
    getSelectableEffects,
    isEffectSelectionRequired,
    applyCouncil,
    enchant,
    reroll,
  };
}