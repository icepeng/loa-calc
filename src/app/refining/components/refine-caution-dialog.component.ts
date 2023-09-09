import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-refine-caution-dialog',
  templateUrl: './refine-caution-dialog.component.html',
  styles: [
    `
      :host {
        word-break: keep-all;
      }
    `,
  ],
})
export class RefineCautionDialogComponent {
  constructor(private dialogRef: MatDialogRef<RefineCautionDialogComponent>) {}

  onConfirm() {
    this.dialogRef.close();
  }
}
