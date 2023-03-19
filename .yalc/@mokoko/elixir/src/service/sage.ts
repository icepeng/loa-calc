import { GameState } from "../model/game";
import { CouncilService } from "./council";

export function createSageService(councilService: CouncilService) {
  function updateCouncils(state: GameState): GameState {
    const council1 = councilService.pick(state, 0, []);
    const council2 = councilService.pick(state, 1, [council1]);
    const council3 = councilService.pick(state, 2, [council1, council2]);
    return {
      ...state,
      phase: "council",
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

  function rerollCouncils(state: GameState): GameState {
    // TODO: 예외처리 없이 council에 가중치 1인 조언으로 처리 가능한지 알아볼것
    if (
      state.turnLeft === 1 &&
      [0, 1, 2].every((i) =>
        ["seal"].includes(GameState.query.getCouncilType(state, i))
      )
    ) {
      return { ...state };
    }

    const council1 = councilService.pick(state, 0, [state.sages[0].councilId]);
    const council2 = councilService.pick(state, 1, [
      state.sages[1].councilId,
      council1,
    ]);
    const council3 = councilService.pick(state, 2, [
      state.sages[2].councilId,
      council1,
      council2,
    ]);
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
    rerollCouncils,
  };
}

export type SageService = ReturnType<typeof createSageService>;
