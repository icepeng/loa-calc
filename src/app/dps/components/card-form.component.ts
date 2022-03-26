import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { DpsForm } from '../dps-form.interface';
import { cardData, CardStatus } from '../models/card';
import { Character } from '../models/character';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .add-button {
        width: 100%;
      }
    `,
  ],
})
export class CardFormComponent implements DpsForm<CardStatus> {
  cardForm = new FormArray([new FormControl(null, Validators.required)]);
  cardList = Object.keys(cardData);

  constructor() {}

  get formControls() {
    return this.cardForm.controls as FormControl[];
  }

  sync(character: Character): void {
    while (this.cardForm.length > 0) {
      this.cardForm.removeAt(0);
    }
    character.cardStatus.forEach((cardName) => {
      this.cardForm.push(new FormControl(cardName, Validators.required));
    });
  }

  getStatus(): CardStatus {
    return this.cardForm.value;
  }

  isValid() {
    this.cardForm.markAllAsTouched();
    return this.cardForm.valid;
  }

  enable() {
    this.cardForm.enable();
  }

  disable() {
    this.cardForm.disable();
  }

  addLine() {
    this.cardForm.push(new FormControl(null, Validators.required));
  }

  removeLine(index: number) {
    this.cardForm.removeAt(index);
  }
}
