import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getPriceData } from '../../refining/functions/getPriceData';

@Component({
  selector: 'app-raid-box-search-dialog',
  templateUrl: './raid-box-search-dialog.component.html',
  styleUrls: ['./raid-box-search-dialog.component.scss'],
})
export class RaidBoxSearchDialogComponent {
  searchResult = '';
  priceType: 'priceYesterday' | 'priceRecent' | 'priceLowest' =
    'priceYesterday';

  constructor(
    private dialogRef: MatDialogRef<RaidBoxSearchDialogComponent>,
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
