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

  return {
    updateCouncils,
  };
}

export type SageService = ReturnType<typeof createSageService>;
