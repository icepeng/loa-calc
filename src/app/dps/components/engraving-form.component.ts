import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DpsForm } from '../dps-form.interface';
import { Character } from '../models/character';
import { engravingData, EngravingStatus } from '../models/engraving';

@Component({
  selector: 'app-engraving-form',
  templateUrl: './engraving-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .add-button {
        width: 100%;
      }
    `,
  ],
})
export class EngravingFormComponent implements DpsForm<EngravingStatus> {
  engravingForm = new FormArray([
    new FormGroup({
      name: new FormControl(null, Validators.required),
      level: new FormControl(null, Validators.required),
    }),
  ]);
  engravingList = engravingData;

  constructor() {}

  sync(character: Character): void {
    while (this.engravingForm.length > 0) {
      this.engravingForm.removeAt(0);
    }
    character.engravingStatus.forEach(({ name, level }) => {
      this.engravingForm.push(
        new FormGroup({
          name: new FormControl(name, Validators.required),
          level: new FormControl(level, Validators.required),
        })
      );
    });
  }

  getStatus(): EngravingStatus {
    return this.engravingForm.value;
  }

  isValid() {
    this.engravingForm.markAllAsTouched();
    return this.engravingForm.valid;
  }

  enable() {
    this.engravingForm.enable();
  }

  disable() {
    this.engravingForm.disable();
  }

  get formGroups() {
    return this.engravingForm.controls as FormGroup[];
  }

  addLine() {
    this.engravingForm.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        level: new FormControl(null, Validators.required),
      })
    );
  }

  removeLine(index: number) {
    this.engravingForm.removeAt(index);
  }
}
