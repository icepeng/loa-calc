import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DpsForm } from '../dps-form.interface';
import { AvatarStatus } from '../models/avatar';
import { Character } from '../models/character';

@Component({
  selector: 'app-avatar-form',
  templateUrl: './avatar-form.component.html',
})
export class AvatarFormComponent implements DpsForm<AvatarStatus> {
  avatarForm = new FormGroup({
    head: new FormControl(null, Validators.required),
    top: new FormControl(null, Validators.required),
    bottom: new FormControl(null, Validators.required),
    weapon: new FormControl(null, Validators.required),
  });

  constructor() {}

  sync(character: Character): void {
    this.avatarForm.patchValue(character.avatarStatus, {
      emitEvent: false,
    });
  }

  getStatus(): AvatarStatus {
    return this.avatarForm.value;
  }

  isValid() {
    this.avatarForm.markAllAsTouched();
    return this.avatarForm.valid;
  }

  enable() {
    this.avatarForm.enable();
  }

  disable() {
    this.avatarForm.disable();
  }
}
