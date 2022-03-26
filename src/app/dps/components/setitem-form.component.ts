import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DpsForm } from '../dps-form.interface';
import { Character } from '../models/character';
import { setitemData, SetitemStatus } from '../models/setitem';

@Component({
  selector: 'app-setitem-form',
  templateUrl: './setitem-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .add-button {
        width: 100%;
      }
    `,
  ],
})
export class SetitemFormComponent implements DpsForm<SetitemStatus> {
  setitemForm = new FormArray([
    new FormGroup({
      name: new FormControl(null, Validators.required),
      setCount: new FormControl(null, Validators.required),
      level2Count: new FormControl(null, Validators.required),
    }),
  ]);
  setitemList = setitemData;

  constructor() {}

  get formGroups() {
    return this.setitemForm.controls as FormGroup[];
  }

  sync(character: Character) {
    while (this.setitemForm.length > 0) {
      this.setitemForm.removeAt(0);
    }
    character.setitemStatus.forEach(({ name, setCount, level2Count }) => {
      this.setitemForm.push(
        new FormGroup({
          name: new FormControl(name, Validators.required),
          setCount: new FormControl(setCount, Validators.required),
          level2Count: new FormControl(level2Count, Validators.required),
        })
      );
    });
  }

  getStatus(): SetitemStatus {
    return this.setitemForm.value;
  }

  isValid() {
    this.setitemForm.markAllAsTouched();
    return this.setitemForm.valid;
  }

  enable() {
    this.setitemForm.enable();
  }

  disable() {
    this.setitemForm.disable();
  }

  addLine() {
    this.setitemForm.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        setCount: new FormControl(null, Validators.required),
        level2Count: new FormControl(null, Validators.required),
      })
    );
  }

  removeLine(index: number) {
    this.setitemForm.removeAt(index);
  }
}
