import { Buff } from './buff';
import { Skill } from './skill';
import { getTripod, SkillSpec } from './skill-spec';
import { addPdamageIndep, addStat, InternalStat, Stat } from './stat';
import { EMPTY_TRIPOD_STATS, getTripodBuff, getTripodStat } from './tripod';

export interface SkillState {
  name: string;
  level: number;
  gem: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  tripod: Array<{ name: string; level: number }>;
  additionalStat?: Stat;
}

export type SkillStatus = SkillState[];

export interface Job {
  name: string;
  skills: SkillSpec[];
  buffs: Buff[];
}

const gemTable = {
  0: 0,
  1: 3,
  2: 6,
  3: 9,
  4: 12,
  5: 15,
  6: 18,
  7: 21,
  8: 24,
  9: 30,
  10: 40,
};

export function buildSkill(
  job: Job,
  name: string,
  skillState: SkillState,
  internalStat: InternalStat
): Skill {
  const skillSpec = job.skills.find((sk) => sk.name === name)!;
  let skillType = skillSpec.type;
  let skillAfters = skillSpec.skillAfters.map((skillName) =>
    buildSkill(job, skillName, skillState, internalStat)
  );

  let stat = Stat();
  stat = addStat(stat, Stat({ pdamageIndep: gemTable[skillState.gem] }));
  if (skillState.tripod) {
    for (const tripod of skillState.tripod) {
      const givenTripod = getTripod(skillSpec, tripod.name);
      if (!givenTripod) {
        throw new TypeError(`Tripod ${tripod.name} not found in skill ${name}`);
      }
      if (givenTripod.overrideType) {
        skillType = givenTripod.overrideType;
      }
      if (givenTripod.skillAfter) {
        skillAfters = [
          ...skillAfters,
          ...[
            buildSkill(job, givenTripod.skillAfter, skillState, internalStat),
          ],
        ];
      }
      if (givenTripod.statList) {
        stat = addStat(stat, getTripodStat(givenTripod, tripod.level));
      }
    }
  }

  if (skillState.additionalStat) {
    stat = addStat(stat, skillState.additionalStat);
  }

  if (skillSpec.statFromSpecial) {
    stat = addStat(stat, skillSpec.statFromSpecial(internalStat.special));
  }

  return {
    name: skillSpec.name,
    base: skillSpec.damageTable[skillState.level][0],
    coefficient: skillSpec.damageTable[skillState.level][1],
    multiplier: skillSpec.multiplier,
    type: skillType,
    head: skillSpec.head,
    back: skillSpec.back,
    consumeMana: skillSpec.consumeMana,
    stat: stat,
    skillAfters: skillAfters,
    tags: skillSpec.tags,
  };
}

export function buildSkillBuffs(
  job: Job,
  name: string,
  skillState: SkillState
): Buff[] {
  const skillSpec = job.skills.find((sk) => sk.name === name)!;
  const buffList: Buff[] = [];
  if (skillState.tripod) {
    for (const tripod of skillState.tripod) {
      const givenTripod = getTripod(skillSpec, tripod.name);
      if (!givenTripod) {
        throw new TypeError(`Tripod ${tripod.name} not found in skill ${name}`);
      }
      if (givenTripod.buffStatList) {
        buffList.push(getTripodBuff(givenTripod, tripod.level));
      }
    }
  }

  return buffList;
}

export function build(
  job: Job,
  skillStatus: SkillStatus,
  internalStat: InternalStat
): { skills: Skill[]; buffs: Buff[] } {
  const skills: Skill[] = [];
  const buffs: Buff[] = [...job.buffs];
  for (const skillState of skillStatus) {
    const skillName = skillState.name;
    skills.push(buildSkill(job, skillName, skillState, internalStat));
    buffs.push(...buildSkillBuffs(job, skillName, skillState));
  }

  return { skills, buffs };
}
