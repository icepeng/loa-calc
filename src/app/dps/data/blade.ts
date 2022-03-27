import { Job } from '../models/job';
import { SkillSpec } from '../models/skill-spec';
import { Stat, subPdamageIndep } from '../models/stat';

export const blade: Job = {
  name: '블레이드',
  buffs: [
    {
      name: '블레이드 아츠',
      props: ['onoff'],
      defaultState: { onoff: true, stack: 0 },
      condition: ({ onoff }) => onoff,
      getStat: () => Stat({ pattJob: 30 }),
    },
  ],
  skills: [
    SkillSpec({
      // TODO: 횟수 조절은 어떻게?
      name: '스핀 커터',
      type: 'Combo',
      damageTable: {
        10: [641, 3.45],
      },
      back: true,
      tripods: [
        {
          name: '약점 노출',
          tier: 1,
          maxLevel: 1,
          buffStatList: [
            Stat({
              pdamageIndep: 3,
              pdamageIndepBack: subPdamageIndep(12, 3),
            }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '다크 악셀',
      type: 'Normal',
      damageTable: {
        10: [1535, 8.926],
      },
      back: true,
      tripods: [],
    }),
    SkillSpec({
      name: '소울 앱소버',
      type: 'Charge',
      damageTable: {
        10: [3176, 17.217],
        11: [3178, 18.731],
        12: [3179, 19.663],
      },
      back: true,
      tripods: [
        {
          name: '암흑 공격',
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
          name: '화염 공격',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ crit: 30 }),
            Stat({ crit: 37 }),
            Stat({ crit: 44 }),
            Stat({ crit: 52 }),
            Stat({ crit: 60 }),
          ],
        },
        {
          name: '강력한 찌르기',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ critDamage: 50 }),
            Stat({ critDamage: 62 }),
            Stat({ critDamage: 74 }),
            Stat({ critDamage: 87 }),
            Stat({ critDamage: 100 }),
          ],
        },
        {
          name: '반 가르기',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 100 }),
            Stat({ pdamageIndep: 110 }),
            Stat({ pdamageIndep: 120 }),
            Stat({ pdamageIndep: 130 }),
            Stat({ pdamageIndep: 144 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '어스 슬래쉬',
      type: 'Normal',
      damageTable: {
        10: [1899, 10.317],
      },
      head: true,
      back: true,
      tripods: [
        {
          name: '밀어내기',
          tier: 1,
          maxLevel: 5,
          skillAfter: '어스 슬래쉬(밀어내기)',
        },
        {
          name: '약점 포착',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 40 }),
            Stat({ pdamageIndep: 47.2 }),
            Stat({ pdamageIndep: 54.8 }),
            Stat({ pdamageIndep: 62.4 }),
            Stat({ pdamageIndep: 70 }),
          ],
        },
        {
          name: '대지 폭발',
          maxLevel: 5,
          tier: 3,
          skillAfter: '어스 슬래쉬(대지 폭발)',
        },
      ],
    }),
    SkillSpec({
      name: '어스 슬래쉬(밀어내기)',
      type: 'Normal',
      configurable: false,
      damageTable: {
        10: [1899, 10.317],
      },
      head: true,
      back: true,
      tripods: [
        {
          name: '밀어내기',
          tier: 1,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 15 - 100 }),
            Stat({ pdamageIndep: 21.1 - 100 }),
            Stat({ pdamageIndep: 27.4 - 100 }),
            Stat({ pdamageIndep: 33.8 - 100 }),
            Stat({ pdamageIndep: 40 - 100 }),
          ],
        },
        {
          name: '약점 포착',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 40 }),
            Stat({ pdamageIndep: 47.2 }),
            Stat({ pdamageIndep: 54.8 }),
            Stat({ pdamageIndep: 62.4 }),
            Stat({ pdamageIndep: 70 }),
          ],
        },
        {
          name: '대지 폭발',
          tier: 3,
          maxLevel: 5,
        },
      ],
    }),
    SkillSpec({
      name: '어스 슬래쉬(대지 폭발)',
      type: 'Normal',
      configurable: false,
      damageTable: {
        10: [1899, 10.317],
      },
      head: true,
      back: true,
      tripods: [
        {
          name: '밀어내기',
          tier: 1,
          maxLevel: 5,
        },
        {
          name: '약점 포착',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 40 }),
            Stat({ pdamageIndep: 47.2 }),
            Stat({ pdamageIndep: 54.8 }),
            Stat({ pdamageIndep: 62.4 }),
            Stat({ pdamageIndep: 70 }),
          ],
        },
        {
          name: '대지 폭발',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 90 - 100 }),
            Stat({ pdamageIndep: 99.9 - 100 }),
            Stat({ pdamageIndep: 109.8 - 100 }),
            Stat({ pdamageIndep: 119.7 - 100 }),
            Stat({ pdamageIndep: 129.6 - 100 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '문라이트 소닉',
      type: 'Normal',
      damageTable: {
        10: [3647, 19.751],
        11: [3648, 21.485],
        12: [3650, 22.556],
      },
      tripods: [
        {
          name: '암흑 공격',
          tier: 1,
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
          name: '지속력 강화',
          tier: 2,
          maxLevel: 5,
          overrideType: 'Holding',
          statList: [
            Stat({ pdamageIndep: 50 }),
            Stat({ pdamageIndep: 56 }),
            Stat({ pdamageIndep: 64 }),
            Stat({ pdamageIndep: 72 }),
            Stat({ pdamageIndep: 80 }),
          ],
        },
        {
          name: '집중 공격',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ crit: 50 }),
            Stat({ crit: 57 }),
            Stat({ crit: 64 }),
            Stat({ crit: 72 }),
            Stat({ crit: 80 }),
          ],
        },
        {
          name: '쉐이드 소닉',
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
      ],
    }),
    SkillSpec({
      name: '마엘스톰',
      type: 'Normal',
      damageTable: {
        7: [1023, 6.0648],
      },
      tripods: [],
    }),

    SkillSpec({
      name: '블리츠 러시',
      type: 'Charge',
      damageTable: {
        10: [4211, 22.895],
        11: [4213, 24.904],
        12: [4214, 26.144],
      },
      back: true,
      tripods: [
        {
          name: '급소 타격',
          tier: 1,
          maxLevel: 5,
          statList: [
            Stat({ crit: 15 }),
            Stat({ crit: 21 }),
            Stat({ crit: 27 }),
            Stat({ crit: 33 }),
            Stat({ crit: 40 }),
          ],
        },
        {
          name: '차지 강화',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 20 * 2 }),
            Stat({ pdamageIndep: 23 * 2 }),
            Stat({ pdamageIndep: 27 * 2 }),
            Stat({ pdamageIndep: 31 * 2 }),
            Stat({ pdamageIndep: 35 * 2 }),
          ],
        },
        {
          name: '쉐도우 러시',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 40 }),
            Stat({ pdamageIndep: 47 }),
            Stat({ pdamageIndep: 54 }),
            Stat({ pdamageIndep: 62 }),
            Stat({ pdamageIndep: 70 }),
          ],
        },
        {
          name: '듀얼 블리츠',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 25, critDamage: 55 }),
            Stat({ pdamageIndep: 25, critDamage: 68 }),
            Stat({ pdamageIndep: 25, critDamage: 82 }),
            Stat({ pdamageIndep: 25, critDamage: 96 }),
            Stat({ pdamageIndep: 25, critDamage: 110 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '보이드 스트라이크',
      type: 'Charge',
      damageTable: {
        10: [3561, 19.306],
        11: [3563, 21.003],
        12: [3564, 22.048],
      },
      back: true,
      tripods: [
        {
          name: '암흑 공격',
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
          name: '블랙 익스플로젼',
          tier: 3,
          maxLevel: 5,
          skillAfter: '보이드 스트라이크(블랙 익스플로젼)',
        },
      ],
    }),
    SkillSpec({
      name: '보이드 스트라이크(블랙 익스플로젼)',
      type: 'Charge',
      configurable: false,
      damageTable: {
        10: [3561, 19.306],
        11: [3563, 21.003],
        12: [3564, 22.048],
      },
      tripods: [
        {
          name: '암흑 공격',
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
          name: '블랙 익스플로젼',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 70 - 100 }),
            Stat({ pdamageIndep: 78.4 - 100 }),
            Stat({ pdamageIndep: 86.8 - 100 }),
            Stat({ pdamageIndep: 95.9 - 100 }),
            Stat({ pdamageIndep: 105.0 - 100 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '윈드 컷',
      type: 'Normal',
      back: true,
      damageTable: {
        10: [1088, 5.845],
        11: [1089, 6.36],
        12: [1089, 6.675],
      },
      tripods: [
        {
          name: '급소 타격',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ crit: 30 }),
            Stat({ crit: 37 }),
            Stat({ crit: 44 }),
            Stat({ crit: 52 }),
            Stat({ crit: 60 }),
          ],
        },
        {
          name: '지속력 강화',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 40 }),
            Stat({ pdamageIndep: 47 }),
            Stat({ pdamageIndep: 54 }),
            Stat({ pdamageIndep: 61 }),
            Stat({ pdamageIndep: 70.8 }),
          ],
        },
        {
          name: '검기 폭발',
          tier: 3,
          maxLevel: 5,
          skillAfter: '윈드 컷(검기 폭발)',
        },
      ],
    }),
    SkillSpec({
      name: '윈드 컷(검기 폭발)',
      type: 'Normal',
      back: true,
      configurable: false,
      damageTable: {
        10: [1088, 5.845],
        11: [1089, 6.36],
        12: [1089, 6.675],
      },
      tripods: [
        {
          name: '급소 타격',
          tier: 2,
          maxLevel: 5,
          statList: [
            Stat({ crit: 30 }),
            Stat({ crit: 37 }),
            Stat({ crit: 44 }),
            Stat({ crit: 52 }),
            Stat({ crit: 60 }),
          ],
        },
        {
          name: '지속력 강화',
          tier: 2,
          maxLevel: 5,
        },
        {
          name: '검기 폭발',
          tier: 3,
          maxLevel: 5,
          statList: [
            Stat({ pdamageIndep: 50 - 100 }),
            Stat({ pdamageIndep: 57.5 - 100 }),
            Stat({ pdamageIndep: 65 - 100 }),
            Stat({ pdamageIndep: 72.5 - 100 }),
            Stat({ pdamageIndep: 80 - 100 }),
          ],
        },
      ],
    }),
    SkillSpec({
      name: '블레이드 버스트',
      type: 'Normal',
      consumeMana: false,
      damageTable: {
        11: [7244, 42.873],
      },
      back: true,
      tripods: [],
      statFromSpecial: (special) => Stat({ pdamageIndep: special * 0.11444 }),
    }),
  ],
};
