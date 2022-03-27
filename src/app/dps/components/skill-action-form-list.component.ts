import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { startWith, Subscription } from 'rxjs';
import { Buff, BuffState, getBuffedStat } from '../models/buff';
import { getDamage, Skill, SkillResult } from '../models/skill';
import { SkillAction } from '../models/skill-action';
import { InternalStat, Stat } from '../models/stat';

export type BuffStatusSchema = {
  key: string;
  onoff: boolean;
  stack: boolean;
  defaultState: BuffState;
}[];

@Component({
  selector: 'app-skill-action-form-list',
  templateUrl: './skill-action-form-list.component.html',
  styles: [
    `
      :host {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        flex-direction: column;
      }

      .card-content {
        display: flex;
      }

      .actions {
        display: flex;
        width: 48px;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class SkillActionFormListComponent
  implements OnInit, OnChanges, OnDestroy
{
  @Input() basisStat!: Stat;
  @Input() internalStat!: InternalStat;
  @Input() skills: Skill[] = [];
  @Input() buffs: Buff[] = [];
  @Output() valueChanges = new EventEmitter<SkillAction[]>();

  buffStatusSchema: BuffStatusSchema = [];
  skillResults: (SkillResult | null)[] = [];
  totalDamage: number | null = null;

  subscription$!: Subscription;

  skillActionFormArray = new FormArray([
    new FormGroup({
      name: new FormControl(null, Validators.required),
      position: new FormControl('side', Validators.required),
      buffStatus: new FormGroup({}),
    }),
  ]);

  constructor() {}

  get formGroups() {
    return this.skillActionFormArray.controls as FormGroup[];
  }

  ngOnInit(): void {
    this.subscription$ = this.skillActionFormArray.valueChanges
      .pipe(startWith(this.skillActionFormArray.value))
      .subscribe((skillActions: SkillAction[]) => {
        this.setSkillResults(skillActions);
        this.valueChanges.emit(skillActions);
      });
  }

  private buildBuffStatusSchema() {
    const buffStatusSchema: BuffStatusSchema = [];
    this.buffs.forEach((buff) => {
      const isOnoff = buff.props.includes('onoff');
      const isStack = buff.props.includes('stack');
      if (isOnoff || isStack) {
        buffStatusSchema.push({
          key: buff.name,
          onoff: isOnoff,
          stack: isStack,
          defaultState: buff.defaultState,
        });
      }
    });
    return buffStatusSchema;
  }

  private buildBuffStatusForm(schema: BuffStatusSchema) {
    const buffStatusForm = new FormGroup({});
    schema.forEach(({ onoff, stack, key, defaultState }) => {
      const stateForm = new FormGroup({});
      if (onoff) {
        stateForm.addControl(
          'onoff',
          new FormControl(defaultState.onoff, Validators.required)
        );
      }
      if (stack) {
        stateForm.addControl(
          'stack',
          new FormControl(defaultState.stack, Validators.required)
        );
      }
      buffStatusForm.addControl(key, stateForm);
    });
    return buffStatusForm;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.buffs) {
      const isDisabled = this.skillActionFormArray.disabled;
      this.buffStatusSchema = this.buildBuffStatusSchema();
      this.formGroups.forEach((formGroup) => {
        const prevValue = { ...formGroup.value.buffStatus };
        formGroup.removeControl('buffStatus', { emitEvent: false });

        const buffStatusForm = this.buildBuffStatusForm(this.buffStatusSchema);
        buffStatusForm.patchValue(prevValue);
        if (isDisabled) {
          buffStatusForm.disable();
        }
        formGroup.addControl('buffStatus', buffStatusForm);
      });
    }
    this.setSkillResults(this.skillActionFormArray.value);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  sync(skillActions: SkillAction[]) {
    while (this.skillActionFormArray.length > 0) {
      this.skillActionFormArray.removeAt(0);
    }
    const isDisabled = this.skillActionFormArray.disabled;
    skillActions.forEach(({ name, position, buffStatus }) => {
      const buffStatusForm = this.buildBuffStatusForm(this.buffStatusSchema);
      buffStatusForm.patchValue(buffStatus);
      const skillActionForm = new FormGroup({
        name: new FormControl(name, Validators.required),
        position: new FormControl(position, Validators.required),
        buffStatus: buffStatusForm,
      });
      if (isDisabled) {
        skillActionForm.disable();
      }
      this.skillActionFormArray.push(skillActionForm);
    });
  }

  getStatus(): SkillAction[] {
    return this.skillActionFormArray.value;
  }

  setSkillResults(skillActions: SkillAction[]) {
    this.skillResults = skillActions.map((skillAction) =>
      this.calculate(skillAction)
    );

    if (this.skillResults.includes(null)) {
      this.totalDamage = null;
      return;
    }

    this.totalDamage = this.skillResults.reduce(
      (sum, result) => sum + result!.average,
      0
    );
  }

  calculate(skillAction: SkillAction) {
    const { name, buffStatus, position } = skillAction;
    const skill = this.skills.find((sk) => sk.name === name);
    if (!skill) {
      return null;
    }

    const buffedStat = getBuffedStat(
      this.buffs,
      buffStatus,
      skill,
      this.basisStat,
      this.internalStat
    );

    return getDamage(
      skill,
      { armor: 6000, reduction: 23 },
      position,
      buffedStat
    );
  }

  addItem() {
    this.skillActionFormArray.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        position: new FormControl('side', Validators.required),
        buffStatus: this.buildBuffStatusForm(this.buffStatusSchema),
      })
    );
  }

  removeItem(index: number) {
    this.skillActionFormArray.removeAt(index);
  }

  enable() {
    this.skillActionFormArray.enable();
  }

  disable() {
    this.skillActionFormArray.disable();
  }
}
