import { Buff, BuffDeps, BuffState } from './buff';
import { Stat } from './stat';

export interface Engraving {
  name: string;
  props: Array<keyof BuffDeps>;
  defaultState: BuffState;
  condition: (deps: BuffDeps) => boolean;
  perLevel: Array<(deps: BuffDeps) => Stat>;
}

export interface EngravingState {
  name: string;
  level: 1 | 2 | 3;
}

export type EngravingStatus = EngravingState[];

export const engravingData: Engraving[] = [
  {
    name: '원한',
    props: [],
    defaultState: { onoff: true, stack: 0 },
    condition: (_) => true,
    perLevel: [
      (_) => Stat({ pdamageIndep: 4 }),
      (_) => Stat({ pdamageIndep: 10 }),
      (_) => Stat({ pdamageIndep: 20 }),
    ],
  },
  {
    name: '예리한 둔기',
    props: [],
    defaultState: { onoff: true, stack: 0 },
    condition: (_) => true,
    perLevel: [
      (_) => Stat({ pdamageIndep: -2, critDamage: 10 }),
      (_) => Stat({ pdamageIndep: -2, critDamage: 25 }),
      (_) => Stat({ pdamageIndep: -2, critDamage: 50 }),
    ],
  },
  {
    name: '저주받은 인형',
    props: [],
    defaultState: { onoff: true, stack: 0 },
    condition: (_) => true,
    perLevel: [
      (_) => Stat({ pattCommon: 3 }),
      (_) => Stat({ pattCommon: 8 }),
      (_) => Stat({ pattCommon: 16 }),
    ],
  },
  {
    name: '정밀 단도',
    props: [],
    defaultState: { onoff: true, stack: 0 },
    condition: (_) => true,
    perLevel: [
      (_) => Stat({ crit: 4, critDamage: -12 }),
      (_) => Stat({ crit: 10, critDamage: -12 }),
      (_) => Stat({ crit: 20, critDamage: -12 }),
    ],
  },
  {
    name: '바리케이드',
    props: ['onoff'],
    defaultState: { onoff: true, stack: 0 },
    condition: ({ onoff }) => onoff,
    perLevel: [
      (_) => Stat({ pdamageIndep: 3 }),
      (_) => Stat({ pdamageIndep: 8 }),
      (_) => Stat({ pdamageIndep: 16 }),
    ],
  },
  {
    name: '안정된 상태',
    props: [],
    defaultState: { onoff: true, stack: 0 },
    condition: (_) => true,
    perLevel: [
      (_) => Stat({ pdamageIndep: 3 }),
      (_) => Stat({ pdamageIndep: 8 }),
      (_) => Stat({ pdamageIndep: 16 }),
    ],
  },
  {
    name: '아드레날린',
    props: ['stack'],
    defaultState: { onoff: true, stack: 6 },
    condition: () => true,
    perLevel: [
      ({ stack }) =>
        Stat({
          pattCommon: Math.min(stack, 6) * 0.3,
          crit: stack >= 6 ? 5 : 0,
        }),
      ({ stack }) =>
        Stat({
          pattCommon: Math.min(stack, 6) * 0.6,
          crit: stack >= 6 ? 10 : 0,
        }),
      ({ stack }) =>
        Stat({ pattCommon: Math.min(stack, 6) * 1, crit: stack >= 6 ? 15 : 0 }),
    ],
  },
  {
    name: '정기 흡수',
    props: [],
    defaultState: { onoff: true, stack: 0 },
    condition: (_) => true,
    perLevel: [
      (_) => Stat({ movingSpeed: 3 }),
      (_) => Stat({ movingSpeed: 8 }),
      (_) => Stat({ movingSpeed: 15 }),
    ],
  },
  {
    name: '타격의 대가',
    props: ['skill'],
    defaultState: { onoff: true, stack: 0 },
    condition: ({ skill }) => !(skill.head || skill.back),
    perLevel: [
      () => Stat({ pdamageIndep: 3 }),
      () => Stat({ pdamageIndep: 8 }),
      () => Stat({ pdamageIndep: 16 }),
    ],
  },
  {
    name: '기습의 대가',
    props: [],
    defaultState: { onoff: true, stack: 0 },
    condition: (_) => true,
    perLevel: [
      (_) => Stat({ pdamageIndepBack: 5 }),
      (_) => Stat({ pdamageIndepBack: 12 }),
      (_) => Stat({ pdamageIndepBack: 25 }),
    ],
  },
  {
    name: '에테르 포식자',
    props: ['stack'],
    defaultState: { onoff: true, stack: 30 },
    condition: (_) => true,
    perLevel: [
      ({ stack }) => Stat({ pattCommon: Math.min(stack, 30) * 0.2 }),
      ({ stack }) => Stat({ pattCommon: Math.min(stack, 30) * 0.3 }),
      ({ stack }) => Stat({ pattCommon: Math.min(stack, 30) * 0.5 }),
    ],
  },
  {
    name: '돌격대장',
    props: ['stat'],
    defaultState: { onoff: true, stack: 0 },
    condition: (_) => true,
    perLevel: [
      ({ stat }) =>
        Stat({ pdamageIndep: Math.min(stat.movingSpeed, 40) * 0.1 }),
      ({ stat }) =>
        Stat({ pdamageIndep: Math.min(stat.movingSpeed, 40) * 0.22 }),
      ({ stat }) =>
        Stat({ pdamageIndep: Math.min(stat.movingSpeed, 40) * 0.45 }),
    ],
  },
  {
    name: '슈퍼 차지',
    props: ['skill'],
    defaultState: { onoff: true, stack: 0 },
    condition: ({ skill }: BuffDeps) => skill.type === 'Charge',
    perLevel: [
      (_) => Stat({ pdamageIndep: 4 }),
      (_) => Stat({ pdamageIndep: 10 }),
      (_) => Stat({ pdamageIndep: 20 }),
    ],
  },
  {
    name: '진화의 유산',
    props: ['skill', 'stack'],
    defaultState: { onoff: true, stack: 3 },
    condition: ({ skill }) => skill.tags.includes('싱크 스킬'),
    perLevel: [
      ({ stack }) => Stat({ pdamageIndep: stack * 2 }),
      ({ stack }) => Stat({ pdamageIndep: stack * 4 }),
      ({ stack }) => Stat({ pdamageIndep: stack * 6 }),
    ],
  },
  {
    name: '회귀',
    props: ['onoff'],
    defaultState: { onoff: true, stack: 0 },
    condition: ({ onoff }) => onoff,
    perLevel: [
      (_) => Stat({ crit: 6, critDamage: 20 }),
      (_) => Stat({ crit: 9, critDamage: 30 }),
      (_) => Stat({ crit: 12, critDamage: 40 }),
    ],
  },
  {
    name: '잔재된 기운',
    props: ['onoff', 'stack'],
    defaultState: { onoff: true, stack: 3 },
    condition: ({ onoff }) => onoff,
    perLevel: [
      ({ stack }) => {
        const table = [0, 8, 10, 12];
        return Stat({ pdamageIndep: table[Math.min(stack, 3)] });
      },
      ({ stack }) => {
        const table = [0, 16, 20, 24];
        return Stat({ pdamageIndep: table[Math.min(stack, 3)] });
      },
      ({ stack }) => {
        const table = [0, 25, 30, 36];
        return Stat({ pdamageIndep: table[Math.min(stack, 3)] });
      },
    ],
  },
];

engravingData.sort((a, b) => a.name.localeCompare(b.name));

export function getEngravingBuff(name: string, level: number): Buff {
  const engraving = engravingData.find((engraving) => engraving.name === name)!;
  const { props, defaultState, condition, perLevel } = engraving;
  return {
    name,
    props,
    defaultState,
    condition,
    getStat: perLevel[level - 1],
  };
}
