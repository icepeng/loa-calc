import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-disclaimer-dialog',
  templateUrl: './disclaimer-dialog.component.html',
})
export class DisclaimerDialogComponent {
  constructor(public dialogRef: MatDialogRef<DisclaimerDialogComponent>) {}

  confirm() {
    this.dialogRef.close();
  }
}
