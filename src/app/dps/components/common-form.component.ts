import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DpsForm } from '../dps-form.interface';
import { Character, CommonStatus } from '../models/character';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
})
export class CommonFormComponent implements DpsForm<CommonStatus> {
  commonForm = new FormGroup({
    combatLevel: new FormControl(60, Validators.required),
    expeditionStat: new FormControl(0, Validators.required),
    crit: new FormControl(0, Validators.required),
    special: new FormControl(0, Validators.required),
    swift: new FormControl(0, Validators.required),
    weaponPdamage: new FormControl(0, Validators.required),
  });

  constructor() {}

  sync(character: Character): void {
    this.commonForm.patchValue(character.commonStatus);
  }

  getStatus(): CommonStatus {
    return this.commonForm.value;
  }

  isValid() {
    this.commonForm.markAllAsTouched();
    return this.commonForm.valid;
  }

  enable() {
    this.commonForm.enable();
  }

  disable() {
    this.commonForm.disable();
  }
}
