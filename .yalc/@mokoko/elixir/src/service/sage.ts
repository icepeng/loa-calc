import { GameState } from "../model/game";
import { CouncilService } from "./council";

export function createSageService(councilService: CouncilService) {
  function updateCouncils(state: GameState): GameState {
    const council1 = councilService.pick(state, 0, []);
    const council2 = councilService.pick(state, 1, [council1]);
    const council3 = councilService.pick(state, 2, [council1, council2]);
    return {
      ...state,
      sages: [
        {
          ...state.sages[0],
          councilId: council1,
        },
        {
          ...state.sages[1],
          councilId: council2,
        },
        {
          ...state.sages[2],
          councilId: council3,
        },
      ],
    };
  }

  function getDescription(state: GameState, sageIndex: number) {
    const id = state.sages[sageIndex].councilId;
    const council = councilService.getOne(id);
    if (!council) {
      throw new Error("Invalid council id");
    }

    const effectNames = state.effects.map((eff) => eff.name);
    return council.descriptions[sageIndex]
      .replaceAll("{0}", effectNames[0])
      .replaceAll("{1}", effectNames[1])
      .replaceAll("{2}", effectNames[2])
      .replaceAll("{3}", effectNames[3])
      .replaceAll("{4}", effectNames[4]);
  }

  return {
    updateCouncils,
    getDescription,
  };
}

export type SageService = ReturnType<typeof createSageService>;
