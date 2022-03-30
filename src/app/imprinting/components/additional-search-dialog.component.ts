import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-additional-search-dialog',
  templateUrl: './additional-search-dialog.component.html',
  styles: [],
})
export class AdditionalSearchDialogComponent {
  quality = 0;

  constructor(
    private dialogRef: MatDialogRef<AdditionalSearchDialogComponent>,
    private snackbar: MatSnackBar
  ) {}

  onSubmit() {
    if (this.quality < 0 || this.quality > 100) {
      this.snackbar.open('품질은 0~100 사이의 숫자만 입력 가능합니다.', '닫기');
    }
    this.dialogRef.close(this.quality);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
