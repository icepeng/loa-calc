import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  dealOptions,
  imprintOptions,
  itemNames,
  penaltyOptions,
} from '../functions/const';
import { AccMap } from '../functions/type';

@Component({
  selector: 'app-acc-form-dialog',
  templateUrl: './acc-form-dialog.component.html',
  styleUrls: ['./acc-form-dialog.component.scss'],
})
export class AccFormDialogComponent {
  dealOptions = dealOptions;
  penaltyOptions = penaltyOptions;

  accMap: AccMap = {
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
      (x) => x.includes(name) && x.endsWith(this.accMap.category)
    );
  }

  onSubmit() {
    if (
      !this.accMap.dealOption1[0] ||
      !(this.accMap.category !== '목걸이' || this.accMap.dealOption2![0]) ||
      !this.accMap.imprintOption1[0] ||
      !this.accMap.imprintOption2[0] ||
      !this.accMap.imprintPenalty[0] ||
      !this.accMap.name ||
      !this.accMap.category
    ) {
      this.snackbar.open('입력되지 않은 값이 있습니다.', '닫기');
      return;
    }
    this.dialogRef.close({ acc: this.accMap, price: this.price });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
