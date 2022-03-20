import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DpsForm } from '../dps-form.interface';
import { Character } from '../models/character';
import { gearData, GearGrade, GearSlot, GearStatus } from '../models/gear';

const gearValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const grade = control.get('grade');
  const upgrade = control.get('upgrade');

  if (!grade || !upgrade || !grade.value || !upgrade.value) {
    return null;
  }

  if (gearData[grade.value as GearGrade]['head'][upgrade.value] == null) {
    return {
      gearUpgrade: true,
    };
  }
  return null;
};

class ParentMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    if (!control || !control.parent) {
      return false;
    }
    return control.parent.invalid && control.touched;
  }
}

@Component({
  selector: 'app-gear-form',
  templateUrl: './gear-form.component.html',
})
export class GearFormComponent implements DpsForm<GearStatus> {
  gearForm = new FormGroup({
    head: new FormGroup(
      {
        grade: new FormControl(null, Validators.required),
        upgrade: new FormControl(null, Validators.required),
      },
      { validators: gearValidator }
    ),
    shoulder: new FormGroup(
      {
        grade: new FormControl(null, Validators.required),
        upgrade: new FormControl(null, Validators.required),
      },
      { validators: gearValidator }
    ),
    top: new FormGroup(
      {
        grade: new FormControl(null, Validators.required),
        upgrade: new FormControl(null, Validators.required),
      },
      { validators: gearValidator }
    ),
    bottom: new FormGroup(
      {
        grade: new FormControl(null, Validators.required),
        upgrade: new FormControl(null, Validators.required),
      },
      { validators: gearValidator }
    ),
    glove: new FormGroup(
      {
        grade: new FormControl(null, Validators.required),
        upgrade: new FormControl(null, Validators.required),
      },
      { validators: gearValidator }
    ),
    weapon: new FormGroup(
      {
        grade: new FormControl(null, Validators.required),
        upgrade: new FormControl(null, Validators.required),
      },
      { validators: gearValidator }
    ),
  });
  parentMatcher = new ParentMatcher();

  slots: GearSlot[] = ['head', 'shoulder', 'top', 'bottom', 'glove', 'weapon'];
  slotName = {
    head: '투구',
    shoulder: '견갑',
    top: '상의',
    bottom: '하의',
    glove: '장갑',
    weapon: '무기',
  };

  constructor() {}

  sync(character: Character): void {
    this.gearForm.patchValue(character.gearStatus);
  }

  getStatus(): GearStatus {
    return this.gearForm.value;
  }

  isValid() {
    this.gearForm.markAllAsTouched();
    return this.gearForm.valid;
  }

  enable() {
    this.gearForm.enable();
  }

  disable() {
    this.gearForm.disable();
  }
}
