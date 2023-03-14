import { councils } from "./data/council";
import { effectLevelTable } from "./data/effect";
import { createCouncilService } from "./service/council";
import { createEffectService } from "./service/effect";
import { createGameService } from "./service/game";
import { createLogicService } from "./service/logic";
import { createLogicGuardService } from "./service/logic-guard";
import { createMutationService } from "./service/mutation";
import { createRngService } from "./service/rng";
import { createSageService } from "./service/sage";
import { createTargetService } from "./service/target";

const chance = createRngService();
const logicGuardService = createLogicGuardService();
const mutationService = createMutationService();
const effectService = createEffectService(chance);
const targetService = createTargetService(chance);
const logicService = createLogicService(chance, effectService);
const councilService = createCouncilService(chance, logicGuardService);
const sageService = createSageService(councilService);
const gameService = createGameService(
  chance,
  sageService,
  councilService,
  logicService,
  targetService,
  mutationService
);

export const api = {
  game: gameService,
  sage: sageService,
  council: councilService,
  logic: logicService,
  target: targetService,
  mutation: mutationService,
  effect: effectService,
  rng: chance,
};

export const data = {
  councils: councils,
  effectLevelTable: effectLevelTable,
};
