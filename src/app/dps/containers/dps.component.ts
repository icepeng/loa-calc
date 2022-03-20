import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccessoryFormComponent } from '../components/accessory-form.component';
import { AvatarFormComponent } from '../components/avatar-form.component';
import { CardFormComponent } from '../components/card-form.component';
import { CommonFormComponent } from '../components/common-form.component';
import { EngravingFormComponent } from '../components/engraving-form.component';
import { GearFormComponent } from '../components/gear-form.component';
import { SetitemFormComponent } from '../components/setitem-form.component';
import { SkillActionFormListComponent } from '../components/skill-action-form-list.component';
import { SkillFormListComponent } from '../components/skill-form-list.component';
import { DpsForm } from '../dps-form.interface';
import { Buff } from '../models/buff';
import { Character, getBasisStat, getInternalStat } from '../models/character';
import { getEngravingBuff } from '../models/engraving';
import { build, scouter } from '../models/job';
import { getSetitemBuffs } from '../models/setitem';
import { Skill } from '../models/skill';
import { InternalStat, Stat } from '../models/stat';

const testCharacter: Character = {
  jobName: 'scouter',
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
  jobName: 'scouter',
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
      .row {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 12px;
      }
      .container {
        margin: 20px;
      }
    `,
  ],
})
export class DpsComponent implements OnInit {
  @ViewChild(CommonFormComponent, { static: true })
  commonFormComponent!: CommonFormComponent;
  @ViewChild(GearFormComponent, { static: true })
  gearFormComponent!: GearFormComponent;
  @ViewChild(AccessoryFormComponent, { static: true })
  accessoryFormComponent!: AccessoryFormComponent;
  @ViewChild(AvatarFormComponent, { static: true })
  avatarFormComponent!: AvatarFormComponent;
  @ViewChild(CardFormComponent, { static: true })
  cardFormComponent!: CardFormComponent;
  @ViewChild(EngravingFormComponent, { static: true })
  engravingFormComponent!: EngravingFormComponent;
  @ViewChild(SetitemFormComponent, { static: true })
  setitemFormComponent!: SetitemFormComponent;
  @ViewChild(SkillFormListComponent, { static: true })
  skillFormListComponent!: SkillFormListComponent;
  @ViewChild(SkillActionFormListComponent, { static: true })
  skillActionFormListComponent!: SkillActionFormListComponent;

  skills: Skill[] = [];
  buffs: Buff[] = [];
  internalStat: InternalStat = InternalStat();
  basisStat: Stat = Stat();

  characterComponents: DpsForm[] = [];
  isEditing = true;

  character: Character = testCharacter;

  constructor() {}

  ngOnInit(): void {
    this.characterComponents = [
      this.commonFormComponent,
      this.accessoryFormComponent,
      this.avatarFormComponent,
      this.gearFormComponent,
      this.cardFormComponent,
      this.engravingFormComponent,
      this.setitemFormComponent,
      this.skillFormListComponent,
    ];

    this.characterComponents.forEach((formComponent) => {
      formComponent.sync(this.character);
    });
    this.skillActionFormListComponent.disable();
  }

  saveCharacter() {
    const validities = this.characterComponents.map((component) =>
      component.isValid()
    );
    if (validities.includes(false)) {
      return;
    }

    this.character.commonStatus = this.commonFormComponent.getStatus();
    this.character.accessoryStatus = this.accessoryFormComponent.getStatus();
    this.character.avatarStatus = this.avatarFormComponent.getStatus();
    this.character.gearStatus = this.gearFormComponent.getStatus();
    this.character.cardStatus = this.cardFormComponent.getStatus();
    this.character.engravingStatus = this.engravingFormComponent.getStatus();
    this.character.setitemStatus = this.setitemFormComponent.getStatus();
    this.character.skillStatus = this.skillFormListComponent.getStatus();

    this.characterComponents.forEach((component) => component.disable());
    this.skillActionFormListComponent.enable();
    this.isEditing = false;

    this.internalStat = getInternalStat(this.character);
    this.basisStat = getBasisStat(this.character, this.internalStat);

    const { skills, buffs } = build(
      scouter,
      this.character.skillStatus,
      InternalStat()
    );
    this.skills = skills;
    this.buffs = [
      ...this.character.engravingStatus.map(({ name, level }) =>
        getEngravingBuff(name, level)
      ),
      ...getSetitemBuffs(this.character.setitemStatus),
      ...buffs,
    ];
  }

  editCharacter() {
    this.isEditing = true;
    this.characterComponents.forEach((component) => component.enable());
    this.skillActionFormListComponent.disable();
  }
}
