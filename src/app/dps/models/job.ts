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

export const scouter: Job = {
  buffs: [
    {
      name: '하이퍼 싱크',
      props: ['internalStat', 'skill'],
      defaultState: { onoff: true, stack: 0 },
      condition: ({ skill }) => skill.tags.includes('싱크 스킬'),
      getStat: ({ internalStat }) =>
        Stat({
          pattIndep: 6,
          pdamageIndep: internalStat.special * 0.0886937,
          movingSpeed: 30,
        }),
    },
  ],
  skills: [
    SkillSpec({
      name: '명령 : 레이드 미사일',
      type: 'Normal',
      consumeMana: false,
      damageTable: {
        12: [3066, 19.1],
      },
      tripods: [
        {
          name: '정교한 명령',
          tier: 1,
          statList: [
            Stat({ pdamageIndep: 25 }),
            Stat({ pdamageIndep: 31 }),
            Stat({ pdamageIndep: 37 }),
            Stat({ pdamageIndep: 43 }),
            Stat({ pdamageIndep: 50 }),
          ],
        },
        {
          name: '코어 에너지 수급',
          tier: 1,
          statList: EMPTY_TRIPOD_STATS,
        },
        {
          name: '배터리 방출',
          tier: 1,
          statList: [
            Stat({ pdamageIndep: 30 }),
            Stat({ pdamageIndep: 37 }),
            Stat({ pdamageIndep: 44 }),
            Stat({ pdamageIndep: 52 }),
            Stat({ pdamageIndep: 60 }),
          ],
        },
        {
          name: '연발 미사일',
          tier: 2,
          statList: EMPTY_TRIPOD_STATS,
        },
        {
          name: '유도 미사일',
          tier: 2,
          statList: EMPTY_TRIPOD_STATS,
        },
        {
          name: '오르간 미사일',
          tier: 2,
          statList: [
            Stat({ pdamageIndep: addPdamageIndep(-30, 100) }),
            Stat({ pdamageIndep: addPdamageIndep(-27, 100) }),
            Stat({ pdamageIndep: addPdamageIndep(-23, 100) }),
            Stat({ pdamageIndep: addPdamageIndep(-19, 100) }),
            Stat({ pdamageIndep: addPdamageIndep(-15, 100) }),
          ],
        },
        {
          name: '약점 포착',
          tier: 3,
          statList: [
            Stat({ pdamageIndep: 60 }),
            Stat({ pdamageIndep: 69 }),
            Stat({ pdamageIndep: 78 }),
            Stat({ pdamageIndep: 87 }),
            Stat({ pdamageIndep: 96 }),
          ],
        },
        {
          name: '대형 미사일',
          tier: 3,
          statList: [
            Stat({ crit: 30 }),
            Stat({ crit: 37 }),
            Stat({ crit: 44 }),
            Stat({ crit: 52 }),
            Stat({ crit: 60 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '명령 : 베이비 드론',
      type: 'Area',
      consumeMana: false,
      damageTable: {
        12: [3200, 19.71],
      },
      tripods: [
        {
          name: '정교한 명령',
          tier: 1,
          statList: [
            Stat({ pdamageIndep: 20 }),
            Stat({ pdamageIndep: 26 }),
            Stat({ pdamageIndep: 32 }),
            Stat({ pdamageIndep: 38 }),
            Stat({ pdamageIndep: 45 }),
          ],
        },
        {
          name: '급소 공격',
          tier: 1,
          statList: [
            Stat({ crit: 20 }),
            Stat({ crit: 26 }),
            Stat({ crit: 32 }),
            Stat({ crit: 38 }),
            Stat({ crit: 45 }),
          ],
        },
        {
          name: '코어 에너지 수급',
          tier: 2,
          statList: EMPTY_TRIPOD_STATS,
        },
        {
          name: '일제 공격',
          tier: 3,
          statList: [
            Stat({ pdamageIndep: 60 }),
            Stat({ pdamageIndep: 68 }),
            Stat({ pdamageIndep: 76 }),
            Stat({ pdamageIndep: 85 }),
            Stat({ pdamageIndep: 95 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '코멧 스트라이크',
      type: 'Area',
      consumeMana: false,
      damageTable: {
        12: [1809, 11.27],
      },
      tags: ['싱크 스킬'],
    }),
    SkillSpec({
      name: '슬러그 샷',
      type: 'Area',
      consumeMana: false,
      damageTable: {
        12: [1841, 11.5],
      },
      tags: ['싱크 스킬'],
    }),
    SkillSpec({
      name: '레이저 블레이드',
      type: 'Area',
      consumeMana: false,
      damageTable: {
        12: [3707, 23.13],
      },
      selectableOptions: [
        {
          name: 'Q-E 연계 (피증 20%)',
          stat: Stat({ pdamageIndep: 20 }),
        },
      ],
      tags: ['싱크 스킬'],
    }),
    SkillSpec({
      name: '엑셀리온 빔',
      type: 'Area',
      consumeMana: false,
      damageTable: {
        12: [4603, 28.7],
      },
      head: true,
      tags: ['싱크 스킬'],
    }),
    SkillSpec({
      name: '버스트 블로우',
      type: 'Area',
      consumeMana: false,
      damageTable: {
        12: [3488, 21.71],
      },
      tags: ['싱크 스킬'],
    }),
    SkillSpec({
      name: '크림슨 브레이커',
      type: 'Area',
      consumeMana: false,
      damageTable: {
        12: [7200, 44.94],
      },
      tags: ['싱크 스킬'],
    }),
  ],
};
