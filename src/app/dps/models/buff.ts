import { Skill } from './skill';
import { addStat, InternalStat, Stat } from './stat';

export interface BuffDeps {
  onoff: boolean;
  stack: number;
  skill: Skill;
  stat: Stat;
  internalStat: InternalStat;
}

export interface BuffState {
  onoff: boolean;
  stack: number;
}

export interface Buff {
  name: string;
  props: Array<keyof BuffDeps>;
  defaultState: BuffState;
  condition(deps: BuffDeps): boolean;
  getStat(deps: BuffDeps): Stat;
}

export function getBuffedStat(
  buffs: Buff[],
  buffStatus: Record<string, BuffState>,
  skill: Skill,
  basisStat: Stat,
  internalStat: InternalStat
): Stat {
  const pureBuffs = buffs.filter((buff) => !buff.props.includes('stat'));
  const statBuffs = buffs.filter((buff) => buff.props.includes('stat'));

  const resultStat = [...pureBuffs, ...statBuffs].reduce((stat, buff) => {
    const state = buffStatus[buff.name];
    if (
      !state &&
      (buff.props.includes('onoff') || buff.props.includes('stack'))
    ) {
      throw new Error(`${buff.name} is not found in status`);
    }
    const deps: BuffDeps = { ...state, skill, stat, internalStat };
    if (buff.condition(deps)) {
      return addStat(
        stat,
        buff.getStat({ ...state, skill, stat, internalStat })
      );
    }
    return stat;
  }, basisStat);

  return resultStat;
}
