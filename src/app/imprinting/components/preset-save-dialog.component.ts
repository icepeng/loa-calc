import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-preset-save-dialog',
  templateUrl: './preset-save-dialog.component.html',
})
export class PresetSaveDialogComponent {
  presetNameControl = new FormControl('', Validators.required);

  constructor(private dialogRef: MatDialogRef<PresetSaveDialogComponent>) {}

  onSubmit() {
    this.dialogRef.close({
      name: this.presetNameControl.value,
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
