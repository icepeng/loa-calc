import { Buff } from './buff';
import { SkillType } from './skill';
import { Stat } from './stat';

export interface Tripod {
  name: string;
  tier: 1 | 2 | 3;
  maxLevel: 1 | 5;
  statList?: Stat[];
  buffStatList?: Stat[];
  overrideType?: SkillType;
  skillAfter?: string;
}

export function getTripodStat(tripod: Tripod, level: number): Stat {
  if (!tripod.statList) {
    throw new TypeError(`Tripod ${tripod.name} has no statList`);
  }
  return tripod.statList[level - 1];
}

export function getTripodBuff(tripod: Tripod, level: number): Buff {
  const buffStatList = tripod.buffStatList;
  if (!buffStatList) {
    throw new TypeError(`Tripod ${tripod.name} has no buffStatList`);
  }
  return {
    name: tripod.name,
    props: ['onoff'],
    defaultState: { onoff: true, stack: 0 },
    condition: ({ onoff }) => onoff,
    getStat: (_) => buffStatList[level - 1],
  };
}
