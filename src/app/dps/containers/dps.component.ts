import { Component } from '@angular/core';
import { Character } from '../models/character';
import { Setting } from '../models/setting';

const testCharacter: Character = {
  jobName: '스카우터',
  commonStatus: {
    combatLevel: 60,
    expeditionStat: 637,
    crit: 632,
    special: 1776,
    swift: 53,
    weaponPdamage: 23.45,
  },
  gearStatus: {
    head: {
      grade: 't3_1390_relic',
      upgrade: 16,
    },
    shoulder: {
      grade: 't3_1390_relic',
      upgrade: 17,
    },
    top: {
      grade: 't3_1390_relic',
      upgrade: 16,
    },
    bottom: {
      grade: 't3_1390_relic',
      upgrade: 16,
    },
    glove: {
      grade: 't3_1390_ancient',
      upgrade: 17,
    },
    weapon: {
      grade: 't3_1390_ancient',
      upgrade: 20,
    },
  },
  accessoryStatus: {
    necklace: 'relic',
    ear1: 'relic',
    ear2: 'relic',
    ring1: 'relic',
    ring2: 'relic',
  },
  avatarStatus: {
    head: 'epic',
    top: 'epic',
    bottom: 'epic',
    weapon: 'epic',
  },
  cardStatus: ['남겨진 바람의 절벽 (12)'],
  engravingStatus: [
    { name: '원한', level: 3 },
    { name: '바리케이드', level: 3 },
    { name: '돌격대장', level: 3 },
    { name: '예리한 둔기', level: 3 },
    { name: '아드레날린', level: 2 },
    { name: '진화의 유산', level: 1 },
  ],
  setitemStatus: [{ name: '환각', setCount: 6, level2Count: 6 }],
  skillStatus: [
    {
      name: '명령 : 레이드 미사일',
      level: 12,
      gem: 7,
      tripod: [
        { name: '코어 에너지 수급', level: 5 },
        { name: '오르간 미사일', level: 4 },
        { name: '약점 포착', level: 4 },
      ],
    },
    {
      name: '명령 : 베이비 드론',
      level: 12,
      gem: 7,
      tripod: [
        { name: '급소 공격', level: 4 },
        { name: '코어 에너지 수급', level: 5 },
        { name: '일제 공격', level: 4 },
      ],
    },
    {
      name: '코멧 스트라이크',
      level: 12,
      gem: 9,
      tripod: [],
    },
    {
      name: '슬러그 샷',
      level: 12,
      gem: 9,
      tripod: [],
    },
    {
      name: '레이저 블레이드',
      level: 12,
      gem: 9,
      tripod: [],
    },
    {
      name: '엑셀리온 빔',
      level: 12,
      gem: 9,
      tripod: [],
    },
    {
      name: '버스트 블로우',
      level: 12,
      gem: 9,
      tripod: [],
    },
    {
      name: '크림슨 브레이커',
      level: 12,
      gem: 9,
      tripod: [],
    },
  ],
};

const emptyCharacter: Character = {
  jobName: null,
  commonStatus: {
    combatLevel: null,
    expeditionStat: null,
    crit: null,
    special: null,
    swift: null,
    weaponPdamage: null,
  },
  gearStatus: {
    head: {
      grade: null,
      upgrade: null,
    },
    shoulder: {
      grade: null,
      upgrade: null,
    },
    top: {
      grade: null,
      upgrade: null,
    },
    bottom: {
      grade: null,
      upgrade: null,
    },
    glove: {
      grade: null,
      upgrade: null,
    },
    weapon: {
      grade: null,
      upgrade: null,
    },
  },
  accessoryStatus: {
    necklace: null,
    ear1: null,
    ear2: null,
    ring1: null,
    ring2: null,
  },
  avatarStatus: {
    head: null,
    top: null,
    bottom: null,
    weapon: null,
  },
  cardStatus: [null],
  engravingStatus: [{ name: null, level: null }],
  setitemStatus: [{ name: null, setCount: null, level2Count: null }],
  skillStatus: [{ name: null, level: null, gem: null, tripod: [] }],
} as unknown as Character;
@Component({
  selector: 'app-dps',
  templateUrl: './dps.component.html',
  styles: [
    `
      .container {
        margin: 20px;
      }
    `,
  ],
})
export class DpsComponent {
  settings: Setting[] = [
    {
      character: testCharacter,
      skillActions: [],
    },
  ];

  constructor() {}

  addSetting() {
    this.settings.push({ character: emptyCharacter, skillActions: [] });
  }

  copySetting(setting: Setting) {
    this.settings.push(setting);
  }

  removeSetting(index: number) {
    this.settings.splice(index, 1);
    this.settings.slice();
  }
}
