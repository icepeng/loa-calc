import { Character } from './character';
import { SkillAction } from './skill-action';

export interface Setting {
  character: Character;
  skillActions: SkillAction[];
}
