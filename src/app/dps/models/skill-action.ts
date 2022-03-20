import { BuffState } from './buff';
import { AttackPosition } from './skill';

export interface SkillAction {
  name: string;
  buffStatus: Record<string, BuffState>;
  position: AttackPosition;
}
