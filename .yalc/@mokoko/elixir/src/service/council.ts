import { councilRecord, councilsPerType } from "../data/council";
import { Council } from "../model/council";
import game, { GameState } from "../model/game";
import { LogicGuardService } from "./logic-guard";
import { RngService } from "./rng";

export function createCouncilService(
  chance: RngService,
  logicGuardService: LogicGuardService
) {
  function isCouncilAvailable(
    state: GameState,
    council: Council,
    sageIndex: number,
    pickedCouncils: string[]
  ) {
    if (!game.isTurnInRange(state, council.range)) {
      return false;
    }

    if (pickedCouncils.includes(council.id)) {
      return false;
    }

    if (council.slotType === 3) {
      return true;
    }

    return council.slotType === sageIndex;
  }

  function getOne(id: string) {
    const council = councilRecord[id];
    if (!council) {
      throw new Error("Invalid council id");
    }

    return council;
  }

  function getLogics(id: string) {
    return getOne(id).logics;
  }

  function pick(
    state: GameState,
    sageIndex: number,
    pickedCouncils: string[]
  ): string {
    const councilType = game.getCouncilType(state, sageIndex);
    const availableCouncils = councilsPerType[councilType].filter((data) =>
      isCouncilAvailable(state, data, sageIndex, pickedCouncils)
    );
    if (availableCouncils.length === 0) {
      throw new Error("No council available");
    }

    const weightTable = availableCouncils.map((council) => council.pickRatio);

    let selected: Council;
    let cnt = 0;
    while (true) {
      cnt++;
      if (cnt > 1000) {
        console.log(state, sageIndex, pickedCouncils);
        throw new Error("Failed to pick council");
      }

      selected = chance.weighted(availableCouncils, weightTable);
      if (
        selected.logics.every((logic) =>
          logicGuardService.runLogicGuard(state, logic)
        )
      ) {
        break;
      }
    }
    return selected.id;
  }

  return {
    pick,
    getOne,
    getLogics,
  };
}

export type CouncilService = ReturnType<typeof createCouncilService>;
