import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DpsForm } from '../dps-form.interface';
import { AccessoryStatus } from '../models/accessory';
import { Character } from '../models/character';

@Component({
  selector: 'app-accessory-form',
  templateUrl: './accessory-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessoryFormComponent implements DpsForm<AccessoryStatus> {
  accessoryForm = new FormGroup({
    necklace: new FormControl(null, Validators.required),
    ear1: new FormControl(null, Validators.required),
    ear2: new FormControl(null, Validators.required),
    ring1: new FormControl(null, Validators.required),
    ring2: new FormControl(null, Validators.required),
  });

  constructor() {}

  sync(character: Character) {
    this.accessoryForm.patchValue(character.accessoryStatus, {
      emitEvent: false,
    });
  }

  getStatus(): AccessoryStatus {
    return this.accessoryForm.value;
  }

  isValid() {
    this.accessoryForm.markAllAsTouched();
    return this.accessoryForm.valid;
  }

  enable() {
    this.accessoryForm.enable();
  }

  disable() {
    this.accessoryForm.disable();
  }
}
