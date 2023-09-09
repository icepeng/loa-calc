import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { imprintingPresetToken } from '../functions/const';
import { Preset } from '../functions/type';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-preset-load-dialog',
  templateUrl: './preset-load-dialog.component.html',
  styleUrls: ['./preset-load-dialog.component.scss'],
})
export class PresetLoadDialogComponent implements OnInit {
  presets: Preset[] = [];
  selectedPreset: Preset | undefined;

  constructor(private dialogRef: MatDialogRef<PresetLoadDialogComponent>) {}

  ngOnInit() {
    this.presets = JSON.parse(
      localStorage.getItem(imprintingPresetToken) || '[]'
    );
  }

  onSelectionChange(change: MatSelectionListChange) {
    this.selectedPreset = change.options[0].value;
  }

  onSubmit() {
    this.dialogRef.close(this.selectedPreset);
  }

  onDelete() {
    if (this.selectedPreset) {
      this.presets = this.presets.filter(
        (preset) => preset.name !== this.selectedPreset?.name
      );
      localStorage.setItem(imprintingPresetToken, JSON.stringify(this.presets));
      this.selectedPreset = undefined;
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
