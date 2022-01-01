import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  dealOptions,
  imprintOptions,
  itemNames,
  penaltyOptions,
} from '../functions/const';
import { AccInfo } from '../functions/type';

@Component({
  selector: 'app-acc-form-dialog',
  templateUrl: './acc-form-dialog.component.html',
  styleUrls: ['./acc-form-dialog.component.scss'],
})
export class AccFormDialogComponent {
  dealOptions = dealOptions;
  penaltyOptions = penaltyOptions;

  accInfo: AccInfo = {
    category: '',
    name: '',
    quality: 0,
    dealOption1: ['', 0],
    dealOption2: ['', 0],
    imprintOption1: ['', 0],
    imprintOption2: ['', 0],
    imprintPenalty: ['', 0],
  };
  price = 0;

  constructor(
    private dialogRef: MatDialogRef<AccFormDialogComponent>,
    private snackbar: MatSnackBar
  ) {}

  filterImprint(name: string) {
    return imprintOptions.filter((x) => x.includes(name));
  }

  filterItemName(name: string) {
    return itemNames.filter(
      (x) => x.includes(name) && x.endsWith(this.accInfo.category)
    );
  }

  onSubmit() {
    if (
      !this.accInfo.dealOption1[0] ||
      !(this.accInfo.category !== '목걸이' || this.accInfo.dealOption2![0]) ||
      !this.accInfo.imprintOption1[0] ||
      !this.accInfo.imprintOption2[0] ||
      !this.accInfo.imprintPenalty[0] ||
      !this.accInfo.name ||
      !this.accInfo.category
    ) {
      this.snackbar.open('입력되지 않은 값이 있습니다.', '닫기');
      return;
    }
    this.dialogRef.close({ acc: this.accInfo, price: this.price });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
