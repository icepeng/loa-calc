import { councilsPerType } from "../data/council";
import { Council } from "../model/council";
import { GameState } from "../model/game";
import { LogicGuardService } from "./logic-guard";
import { RngService } from "./rng";

export function createCouncilService(
  chance: RngService,
  logicGuardService: LogicGuardService
) {
  function pick(
    state: GameState,
    sageIndex: number,
    pickedCouncils: string[]
  ): string {
    const councilType = GameState.query.getCouncilType(state, sageIndex);
    const availableCouncils = councilsPerType[councilType].filter((data) =>
      Council.query.isCouncilAvailable(state, data, sageIndex, pickedCouncils)
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
  };
}

export type CouncilService = ReturnType<typeof createCouncilService>;
