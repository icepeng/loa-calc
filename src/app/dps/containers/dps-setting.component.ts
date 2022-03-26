import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccessoryFormComponent } from '../components/accessory-form.component';
import { AvatarFormComponent } from '../components/avatar-form.component';
import { CardFormComponent } from '../components/card-form.component';
import { CommonFormComponent } from '../components/common-form.component';
import { EngravingFormComponent } from '../components/engraving-form.component';
import { GearFormComponent } from '../components/gear-form.component';
import { SetitemFormComponent } from '../components/setitem-form.component';
import { SkillActionFormListComponent } from '../components/skill-action-form-list.component';
import { SkillFormListComponent } from '../components/skill-form-list.component';
import { jobList, jobRecord } from '../data/job';
import { DpsForm } from '../dps-form.interface';
import { Buff } from '../models/buff';
import { getBasisStat, getInternalStat } from '../models/character';
import { getEngravingBuff } from '../models/engraving';
import { build } from '../models/job';
import { getSetitemBuffs } from '../models/setitem';
import { Setting } from '../models/setting';
import { Skill } from '../models/skill';
import { SkillSpec } from '../models/skill-spec';
import { InternalStat, Stat } from '../models/stat';

@Component({
  selector: 'app-dps-setting',
  templateUrl: './dps-setting.component.html',
  styles: [
    `
      .row {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 12px;
      }
    `,
  ],
})
export class DpsSettingComponent implements OnInit {
  @Input() setting!: Setting;
  @Output() copySetting = new EventEmitter<Setting>();
  @Output() removeSetting = new EventEmitter();

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

  jobList = jobList;
  skillSpecs: SkillSpec[] = [];

  skills: Skill[] = [];
  buffs: Buff[] = [];
  internalStat: InternalStat = InternalStat();
  basisStat: Stat = Stat();

  characterComponents: DpsForm[] = [];
  jobNameControl = new FormControl(null);

  editTarget: 'jobName' | 'character' | 'skillActions' = 'jobName';

  constructor() {}

  get character() {
    return this.setting.character;
  }

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

    this.setEditTarget('jobName');
    if (this.character.jobName) {
      this.jobNameControl.setValue(this.character.jobName);
      this.saveJobName(this.character.jobName);
      this.buildJob();
    }
    this.characterComponents.forEach((formComponent) => {
      formComponent.sync(this.character);
    });
    this.skillActionFormListComponent.sync(this.setting.skillActions);
  }

  setEditTarget(target: 'jobName' | 'character' | 'skillActions') {
    this.editTarget = target;

    if (target !== 'jobName') {
      this.jobNameControl.disable();
    }
    if (target !== 'character') {
      this.characterComponents.forEach((component) => component.disable());
    }
    if (target !== 'skillActions') {
      this.skillActionFormListComponent.disable();
    }

    if (target === 'jobName') {
      this.jobNameControl.enable();
    }
    if (target === 'character') {
      this.characterComponents.forEach((component) => component.enable());
    }
    if (target === 'skillActions') {
      this.skillActionFormListComponent.enable();
    }
  }

  saveJobName(jobName: string) {
    this.character.jobName = jobName;
    this.skillSpecs = jobRecord[this.jobNameControl.value].skills;
    this.setEditTarget('character');
  }

  buildJob() {
    this.internalStat = getInternalStat(this.character);
    this.basisStat = getBasisStat(this.character, this.internalStat);

    const { skills, buffs } = build(
      jobRecord[this.character.jobName],
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

    this.setEditTarget('skillActions');
    this.buildJob();
  }

  editCharacter() {
    this.setEditTarget('character');
  }
}
