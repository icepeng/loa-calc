import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MobileDialogComponent } from './components/mobile-dialog.component';
import { AlertDialogComponent } from './components/alert-dialog.component';

@NgModule({
  declarations: [MobileDialogComponent, AlertDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class CoreModule {}
