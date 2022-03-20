import { Buff } from './buff';
import { addStat, Stat, subPdamageIndep } from './stat';

export interface Setitem {
  name: string;
  statList: Array<[Stat, Stat] | null>;
  buffList: Array<[Buff, Buff] | null>;
}

export interface SetitemState {
  name: string;
  setCount: number;
  level2Count: number;
}

export type SetitemStatus = SetitemState[];

export const setitemData: Array<Setitem> = [
  {
    name: '환각',
    statList: [null, [Stat({ crit: 15 }), Stat({ crit: 18 })], null],
    buffList: [
      [
        {
          name: '환각',
          props: ['onoff'],
          defaultState: { onoff: false, stack: 0 },
          condition: ({ onoff }) => onoff,
          getStat: (_) => Stat({ pdamageIndep: 13 }),
        },
        {
          name: '환각',
          props: ['onoff'],
          defaultState: { onoff: false, stack: 0 },
          condition: ({ onoff }) => onoff,
          getStat: (_) => Stat({ pdamageIndep: 15 }),
        },
      ],
      null,
      [
        {
          name: '실체',
          props: ['onoff'],
          defaultState: { onoff: true, stack: 0 },
          condition: ({ onoff }) => onoff,
          getStat: (_) => Stat({ pdamageIndep: 25, crit: 5 }),
        },
        {
          name: '실체',
          props: ['onoff'],
          defaultState: { onoff: true, stack: 0 },
          condition: ({ onoff }) => onoff,
          getStat: (_) => Stat({ pdamageIndep: 29, crit: 7 }),
        },
      ],
    ],
  },
  {
    name: '악몽',
    statList: [null, null, null],
    buffList: [
      [
        {
          name: '악몽',
          props: ['skill'],
          defaultState: { onoff: true, stack: 0 },
          condition: ({ skill }) => skill.consumeMana,
          getStat: ({ skill }) => Stat({ pdamageIndep: 13 }),
        },
        {
          name: '악몽',
          props: ['skill'],
          defaultState: { onoff: true, stack: 0 },
          condition: ({ skill }) => skill.consumeMana,
          getStat: ({ skill }) => Stat({ pdamageIndep: 15 }),
        },
      ],
      [
        {
          name: '마나 중독',
          props: [],
          defaultState: { onoff: true, stack: 0 },
          condition: () => true,
          getStat: () => Stat({ pdamage: 15 }),
        },
        {
          name: '마나 중독',
          props: [],
          defaultState: { onoff: true, stack: 0 },
          condition: () => true,
          getStat: () => Stat({ pdamage: 18 }),
        },
      ],
      [
        {
          name: '마나 중독',
          props: [],
          defaultState: { onoff: true, stack: 0 },
          condition: () => true,
          getStat: () => Stat({ pdamageIndep: 15 }),
        },
        {
          name: '마나 중독',
          props: [],
          defaultState: { onoff: true, stack: 0 },
          condition: () => true,
          getStat: () => Stat({ pdamageIndep: 18 }),
        },
      ],
    ],
  },
  {
    name: '지배',
    statList: [null, null, null],
    buffList: [
      [
        {
          name: '내면의 각성',
          props: [],
          defaultState: { onoff: true, stack: 0 },
          condition: () => true,
          getStat: () => Stat({ pdamageIndep: 10 }),
        },
        {
          name: '내면의 각성',
          props: [],
          defaultState: { onoff: true, stack: 0 },
          condition: () => true,
          getStat: () => Stat({ pdamageIndep: 10 }),
        },
      ],
      [
        {
          name: '내면의 각성',
          props: [],
          defaultState: { onoff: true, stack: 0 },
          condition: () => true,
          getStat: () => Stat({ pdamageIndep: subPdamageIndep(25, 10) }),
        },
        {
          name: '내면의 각성',
          props: [],
          defaultState: { onoff: true, stack: 0 },
          condition: () => true,
          getStat: () => Stat({ pdamageIndep: subPdamageIndep(28, 10) }),
        },
      ],
      [
        {
          name: '내면의 각성',
          props: [],
          defaultState: { onoff: true, stack: 0 },
          condition: () => true,
          getStat: () => Stat({ pdamageIndep: 15 }),
        },
        {
          name: '내면의 각성',
          props: [],
          defaultState: { onoff: true, stack: 0 },
          condition: () => true,
          getStat: () => Stat({ pdamageIndep: 18 }),
        },
      ],
    ],
  },
  {
    name: '구원',
    statList: [null, null, null],
    buffList: [
      [
        {
          name: '고양',
          props: ['stack'],
          defaultState: { onoff: true, stack: 20 },
          condition: () => true,
          getStat: ({ stack }) => Stat({ pdamage: Math.min(stack, 20) * 0.7 }),
        },
        {
          name: '고양',
          props: ['stack'],
          defaultState: { onoff: true, stack: 20 },
          condition: () => true,
          getStat: ({ stack }) => Stat({ pdamage: Math.min(stack, 20) * 0.9 }),
        },
      ],
      [
        {
          name: '고양',
          props: ['stack'],
          defaultState: { onoff: true, stack: 20 },
          condition: () => true,
          getStat: ({ stack }) => Stat({ pdamage: Math.min(stack, 20) * 0.7 }),
        },
        {
          name: '고양',
          props: ['stack'],
          defaultState: { onoff: true, stack: 20 },
          condition: () => true,
          getStat: ({ stack }) => Stat({ pdamage: Math.min(stack, 20) * 0.9 }),
        },
      ],
      [
        {
          name: '고양',
          props: ['stack'],
          defaultState: { onoff: true, stack: 20 },
          condition: () => true,
          getStat: ({ stack }) =>
            Stat({
              pdamage: Math.min(stack, 20) * 0.7,
              pdamageIndep: +(stack === 20) * 5,
            }),
        },
        {
          name: '고양',
          props: ['stack'],
          defaultState: { onoff: true, stack: 20 },
          condition: () => true,
          getStat: ({ stack }) =>
            Stat({
              pdamage: Math.min(stack, 20) * 0.9,
              pdamageIndep: +(stack === 20) * 5,
            }),
        },
      ],
    ],
  },
  {
    name: '사멸',
    statList: [
      [
        Stat({
          critDamage: 17,
          critDamageHead: 55 - 17,
          critDamageBack: 55 - 17,
        }),
        Stat({
          critDamage: 20,
          critDamageHead: 60 - 20,
          critDamageBack: 60 - 20,
        }),
      ],
      [Stat({ crit: 17 }), Stat({ crit: 20 })],
      [
        Stat({
          pdamageIndep: 7,
          pdamageIndepHead: subPdamageIndep(21, 7),
          pdamageIndepBack: subPdamageIndep(21, 7),
        }),
        Stat({
          pdamageIndep: 8,
          pdamageIndepHead: subPdamageIndep(24, 8),
          pdamageIndepBack: subPdamageIndep(24, 8),
        }),
      ],
    ],
    buffList: [null, null, null],
  },
];

export function getSetitemStat(setitemStatus: SetitemStatus): Stat {
  let stat = Stat();
  for (const { name, setCount, level2Count } of setitemStatus) {
    const data = setitemData.find(({ name: n }) => n === name)!;
    for (let i = 0; i < Math.floor(level2Count / 2); i += 1) {
      const statTuple = data.statList[i];
      if (statTuple) {
        stat = addStat(stat, statTuple[1]);
      }
    }
    for (
      let i = Math.floor(level2Count / 2);
      i < Math.floor(setCount / 2);
      i += 1
    ) {
      const statTuple = data.statList[i];
      if (statTuple) {
        stat = addStat(stat, statTuple[0]);
      }
    }
  }

  return stat;
}

export function getSetitemBuffs(setitemStatus: SetitemStatus): Buff[] {
  const buffs: Buff[] = [];
  for (const { name, setCount, level2Count } of setitemStatus) {
    const data = setitemData.find(({ name: n }) => n === name)!;
    for (let i = 0; i < Math.floor(level2Count / 2); i += 1) {
      const buffTuple = data.buffList[i];
      if (buffTuple) {
        buffs.push(buffTuple[1]);
      }
    }
    for (
      let i = Math.floor(level2Count / 2);
      i < Math.floor(setCount / 2);
      i += 1
    ) {
      const buffTuple = data.buffList[i];
      if (buffTuple) {
        buffs.push(buffTuple[0]);
      }
    }
  }

  return buffs;
}
