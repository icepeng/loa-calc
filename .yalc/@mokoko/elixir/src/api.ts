import { councils } from "./data/council";
import { effectLevelTable, effectOptions } from "./data/effect";
import { Council } from "./model/council";
import { Effect } from "./model/effect";
import { GameState } from "./model/game";
import { Sage } from "./model/sage";
import { createCouncilService } from "./service/council";
import { createEffectService } from "./service/effect";
import { createGameService } from "./service/game";
import { createLogicService } from "./service/logic";
import { createLogicGuardService } from "./service/logic-guard";
import { createRngService } from "./service/rng";
import { createSageService } from "./service/sage";
import { createTargetService } from "./service/target";

const chance = createRngService();
const logicGuardService = createLogicGuardService();
const effectService = createEffectService(chance);
const targetService = createTargetService(chance);
const logicService = createLogicService(chance, effectService);
const councilService = createCouncilService(chance, logicGuardService);
const sageService = createSageService(councilService);
const gameService = createGameService(
  chance,
  sageService,
  logicService,
  targetService
);

export const query = {
  council: Council.query,
  effect: Effect.query,
  game: GameState.query,
  sage: Sage.query,
};

export const api = {
  game: gameService,
  sage: sageService,
  council: councilService,
  logic: logicService,
  target: targetService,
  effect: effectService,
  rng: chance,
};

export const data = {
  councils: councils,
  effectLevelTable: effectLevelTable,
  effectOptions: effectOptions,
};
