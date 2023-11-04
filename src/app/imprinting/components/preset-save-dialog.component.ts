import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map, startWith } from 'rxjs/operators';
import { imprintingPresetToken } from '../functions/const';
import { Preset } from '../functions/type';

@Component({
  selector: 'app-preset-save-dialog',
  templateUrl: './preset-save-dialog.component.html',
})
export class PresetSaveDialogComponent implements OnInit {
  presets: Preset[] = [];
  presetNameControl = new FormControl('', [
    Validators.required,
    (control) => {
      return this.presets.some((preset) => preset.name === control.value)
        ? { duplicate: true }
        : null;
    },
  ]);

  constructor(private dialogRef: MatDialogRef<PresetSaveDialogComponent>) {}

  ngOnInit() {
    this.presets = JSON.parse(
      localStorage.getItem(imprintingPresetToken) || '[]'
    );
  }

  onSubmit() {
    if (this.presetNameControl.invalid) {
      return;
    }
    this.dialogRef.close({
      name: this.presetNameControl.value,
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
