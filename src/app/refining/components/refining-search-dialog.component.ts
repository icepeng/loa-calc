import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getPriceData } from '../functions/getPriceData';

@Component({
  selector: 'app-refining-search-dialog',
  templateUrl: './refining-search-dialog.component.html',
  styleUrls: ['./refining-search-dialog.component.scss'],
})
export class RefiningSearchDialogComponent {
  searchResult = '';
  priceType: 'priceYesterday' | 'priceRecent' | 'priceLowest' =
    'priceYesterday';

  constructor(
    private dialogRef: MatDialogRef<RefiningSearchDialogComponent>,
    private snackbar: MatSnackBar
  ) {}

  onSubmit() {
    getPriceData()
      .then((result) => this.dialogRef.close(result))
      .catch((err) =>
        this.snackbar.open('정보 갱신 중 오류가 발생하였습니다.', '닫기')
      );
  }

  onCancel() {
    this.dialogRef.close();
  }
}
