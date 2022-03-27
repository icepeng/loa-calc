import { Job } from '../models/job';
import { SkillSpec } from '../models/skill-spec';
import { Stat } from '../models/stat';

export const artist: Job = {
  name: '도화가',
  buffs: [
    {
      name: '저무는 달',
      props: ['internalStat', 'onoff'],
      defaultState: { onoff: false, stack: 0 },
      condition: ({ onoff }) => onoff,
      getStat: ({ internalStat }) =>
        Stat({ pdamageIndep: 10 * (1 + internalStat.special * 0.000543611) }),
    },
  ],
  skills: [
    SkillSpec({
      name: '필법 : 한획긋기',
      type: 'Normal',
      damageTable: {
        11: [5978, 19.13],
      },
      back: true,
      tripods: [
        {
          name: '급소 타격',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ crit: 40 }),
            Stat({ crit: 47 }),
            Stat({ crit: 54 }),
            Stat({ crit: 62 }),
            Stat({ crit: 70 }),
          ],
        },
        {
          name: '연속 긋기',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 40 }),
            Stat({ pdamageIndep: 47.2 }),
            Stat({ pdamageIndep: 54.4 }),
            Stat({ pdamageIndep: 62 }),
            Stat({ pdamageIndep: 70 }),
          ],
        },
        {
          name: '거대한 붓',
          tier: 2,
          maxLevel: 5,
          overrideType: 'Charge',
          statList: [
            Stat({ pdamageIndep: 50 }),
            Stat({ pdamageIndep: 57 }),
            Stat({ pdamageIndep: 64 }),
            Stat({ pdamageIndep: 72 }),
            Stat({ pdamageIndep: 80 }),
          ],
        },
        {
          name: '강화된 일격',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 60 }),
            Stat({ pdamageIndep: 68 }),
            Stat({ pdamageIndep: 77 }),
            Stat({ pdamageIndep: 86 }),
            Stat({ pdamageIndep: 95 }),
          ],
        },
      ],
    }),

    SkillSpec({
      name: '묵법 : 두루미나래',
      type: 'Normal',
      damageTable: {
        11: [5988, 19.16],
      },
      tripods: [
        {
          name: '치명적인 일격',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ critDamage: 100 }),
            Stat({ critDamage: 115 }),
            Stat({ critDamage: 130 }),
            Stat({ critDamage: 145 }),
            Stat({ critDamage: 160 }),
          ],
        },
        {
          name: '학익진',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 70 }),
            Stat({ pdamageIndep: 78 }),
            Stat({ pdamageIndep: 87 }),
            Stat({ pdamageIndep: 96 }),
            Stat({ pdamageIndep: 105 }),
          ],
        },
        {
          name: '두루미 폭격',
          tier: 3,
          maxLevel: 5,
          overrideType: 'Area',
          statList: [
            Stat({ pdamageIndep: 60 }),
            Stat({ pdamageIndep: 68 }),
            Stat({ pdamageIndep: 77 }),
            Stat({ pdamageIndep: 86 }),
            Stat({ pdamageIndep: 95 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '묵법 : 범가르기',
      type: 'Normal',
      damageTable: {
        11: [5169, 16.54],
      },
      back: true,
      tripods: [
        {
          name: '궤뚫는 일격',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ armorIgnore: 50 }),
            Stat({ armorIgnore: 57.5 }),
            Stat({ armorIgnore: 65 }),
            Stat({ armorIgnore: 72.5 }),
            Stat({ armorIgnore: 80 }),
          ],
        },
        {
          name: '무력화 강화',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 20 }),
            Stat({ pdamageIndep: 26 }),
            Stat({ pdamageIndep: 32 }),
            Stat({ pdamageIndep: 38 }),
            Stat({ pdamageIndep: 45 }),
          ],
        },
        {
          name: '어둠의 기운',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ crit: 35 }),
            Stat({ crit: 42 }),
            Stat({ crit: 49 }),
            Stat({ crit: 57 }),
            Stat({ crit: 65 }),
          ],
        },
        {
          name: '두 마리의 호랑이',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 60 }),
            Stat({ pdamageIndep: 68 }),
            Stat({ pdamageIndep: 77 }),
            Stat({ pdamageIndep: 86 }),
            Stat({ pdamageIndep: 95 }),
          ],
        },
        {
          name: '강화된 일격',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 80 }),
            Stat({ pdamageIndep: 90 }),
            Stat({ pdamageIndep: 100 }),
            Stat({ pdamageIndep: 110 }),
            Stat({ pdamageIndep: 120 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '묵법 : 달그리기',
      type: 'Casting',
      damageTable: {
        11: [5070, 16.25],
      },
      tripods: [
        {
          name: '별 그리기',
          tier: 2,
          maxLevel: 5,
          overrideType: 'Charge',
          statList: [
            Stat({ pdamageIndep: 60 }),
            Stat({ pdamageIndep: 68 }),
            Stat({ pdamageIndep: 77 }),
            Stat({ pdamageIndep: 86 }),
            Stat({ pdamageIndep: 95 }),
          ],
        },
        {
          name: '먹물 세례',
          tier: 2,
          maxLevel: 5,
          overrideType: 'Normal',
          statList: [
            Stat({ pdamageIndep: 10 * 2 }),
            Stat({ pdamageIndep: 13 * 2 }),
            Stat({ pdamageIndep: 16 * 2 }),
            Stat({ pdamageIndep: 19 * 2 }),
            Stat({ pdamageIndep: 22.5 * 2 }),
          ],
        },
        {
          name: '검은 달',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 20 }),
            Stat({ pdamageIndep: 26 }),
            Stat({ pdamageIndep: 32 }),
            Stat({ pdamageIndep: 38 }),
            Stat({ pdamageIndep: 45 }),
          ],
        },
        {
          name: '붉은 달',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 60 }),
            Stat({ pdamageIndep: 68 }),
            Stat({ pdamageIndep: 77 }),
            Stat({ pdamageIndep: 86 }),
            Stat({ pdamageIndep: 95 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '묵법 : 옹달샘',
      type: 'Normal',
      damageTable: {
        11: [5155, 14.30352],
      },
      tripods: [
        {
          name: '급소타격',
          tier: 1,
          maxLevel: 5,
          statList: [
            Stat({ crit: 20 }),
            Stat({ crit: 26 }),
            Stat({ crit: 32 }),
            Stat({ crit: 38 }),
            Stat({ crit: 45 }),
          ],
        },
        {
          name: '강화된 일격',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 30 }),
            Stat({ pdamageIndep: 37 }),
            Stat({ pdamageIndep: 44 }),
            Stat({ pdamageIndep: 52 }),
            Stat({ pdamageIndep: 60 }),
          ],
        },
        {
          name: '잉어 봉인해제!',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 15 }),
            Stat({ pdamageIndep: 21 }),
            Stat({ pdamageIndep: 27 }),
            Stat({ pdamageIndep: 33 }),
            Stat({ pdamageIndep: 40 }),
          ],
        },
        {
          name: '(잉)어왕출현',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 80 }),
            Stat({ pdamageIndep: 90 }),
            Stat({ pdamageIndep: 100 }),
            Stat({ pdamageIndep: 110 }),
            Stat({ pdamageIndep: 120 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '묵법 : 먹오름',
      type: 'Area',
      damageTable: {
        11: [478, 1.55],
      },
      multiplier: 8,
      tripods: [
        {
          name: '치명적인 일격',
          tier: 1,
          maxLevel: 5,
          statList: [
            Stat({ critDamage: 40 }),
            Stat({ critDamage: 52.5 }),
            Stat({ critDamage: 65 }),
            Stat({ critDamage: 77.5 }),
            Stat({ critDamage: 90 }),
          ],
        },
        {
          name: '헤어날 수 없는 늪',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 60 }),
            Stat({ pdamageIndep: 68 }),
            Stat({ pdamageIndep: 77 }),
            Stat({ pdamageIndep: 86 }),
            Stat({ pdamageIndep: 95 }),
          ],
        },
        {
          name: '먹물점정',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 80 }),
            Stat({ pdamageIndep: 89.6 }),
            Stat({ pdamageIndep: 99.2 }),
            Stat({ pdamageIndep: 109.6 }),
            Stat({ pdamageIndep: 120 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '묵법 : 해그리기',
      type: 'Normal',
      damageTable: {
        10: [0, 0],
      },
      tripods: [
        {
          name: '음의 기운 발산',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 100 }),
            Stat({ pdamageIndep: 111 }),
            Stat({ pdamageIndep: 122 }),
            Stat({ pdamageIndep: 133 }),
            Stat({ pdamageIndep: 145 }),
          ],
        },
        {
          name: '나만의 권능',
          tier: 3,
          maxLevel: 5,
          buffStatList: [
            Stat({ crit: 35.0 }),
            Stat({ crit: 38.5 }),
            Stat({ crit: 42.0 }),
            Stat({ crit: 45.9 }),
            Stat({ crit: 49.7 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '묵법 : 해우물',
      type: 'Normal',
      damageTable: {
        10: [0, 0],
      },
      tripods: [
        {
          name: '나만의 우물',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 20 }),
            Stat({ pdamageIndep: 26 }),
            Stat({ pdamageIndep: 32 }),
            Stat({ pdamageIndep: 38 }),
            Stat({ pdamageIndep: 45 }),
          ],
          buffStatList: [
            Stat({ pattIndep: 30 }),
            Stat({ pattIndep: 30 }),
            Stat({ pattIndep: 30 }),
            Stat({ pattIndep: 30 }),
            Stat({ pattIndep: 30 }),
          ],
        },
      ],
    }),
  ],
};
