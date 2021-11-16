import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tripod-search-dialog',
  templateUrl: './tripod-search-dialog.component.html',
  styleUrls: ['./tripod-search-dialog.component.scss'],
})
export class TripodSearchDialogComponent {
  searchResult = '';

  constructor(
    private dialogRef: MatDialogRef<TripodSearchDialogComponent>,
    private snackbar: MatSnackBar
  ) {}

  onSubmit() {
    try {
      const data = JSON.parse(this.searchResult);
      this.dialogRef.close(data);
    } catch (err) {
      this.snackbar.open(
        '올바르지 않은 검색 결과 형식입니다. 설명서를 확인해주세요.',
        '닫기'
      );
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
