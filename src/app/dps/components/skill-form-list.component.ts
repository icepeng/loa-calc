import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DpsForm } from '../dps-form.interface';
import { Character } from '../models/character';
import { SkillState, SkillStatus } from '../models/job';
import { SkillSpec } from '../models/skill-spec';

function getEmptyForm() {
  return new FormGroup({
    name: new FormControl(null, Validators.required),
    level: new FormControl(null, Validators.required),
    gem: new FormControl(null, Validators.required),
    tripod: new FormArray([
      new FormGroup({
        name: new FormControl(null),
        level: new FormControl(null),
      }),
      new FormGroup({
        name: new FormControl(null),
        level: new FormControl(null),
      }),
      new FormGroup({
        name: new FormControl(null),
        level: new FormControl(null),
      }),
    ]),
  });
}

@Component({
  selector: 'app-skill-form-list',
  templateUrl: './skill-form-list.component.html',
  styles: [
    `
      :host {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }

      .mat-card-subtitle {
        display: flex;
        align-items: center;
      }

      .mat-icon-button {
        width: 24px;
        height: 24px;
        line-height: 24px;
      }
    `,
  ],
})
export class SkillFormListComponent implements DpsForm<SkillStatus> {
  @Input() skillSpecs!: SkillSpec[];

  skillFormArray = new FormArray([getEmptyForm()]);

  constructor() {}

  get formGroups() {
    return this.skillFormArray.controls as FormGroup[];
  }

  sync(character: Character): void {
    while (this.skillFormArray.length > 0) {
      this.skillFormArray.removeAt(0);
    }
    character.skillStatus.forEach((status) => {
      const formGroup = getEmptyForm();
      formGroup.patchValue(status);
      this.skillFormArray.push(formGroup);
    });
  }

  getStatus(): SkillStatus {
    return this.skillFormArray.value.map((skillState: SkillState) => {
      return {
        ...skillState,
        tripod: skillState.tripod.filter((tripod) => tripod.name),
      };
    });
  }

  isValid() {
    this.skillFormArray.markAllAsTouched();
    return this.skillFormArray.valid;
  }

  enable() {
    this.skillFormArray.enable({ emitEvent: false });
  }

  disable() {
    this.skillFormArray.disable({ emitEvent: false });
  }

  addItem() {
    this.skillFormArray.push(getEmptyForm());
  }

  removeItem(index: number) {
    this.skillFormArray.removeAt(index);
  }
}
