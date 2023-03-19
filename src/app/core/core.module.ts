import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertDialogComponent } from './components/alert-dialog.component';
import { DisclaimerDialogComponent } from './components/disclaimer-dialog.component';
import { MobileDialogComponent } from './components/mobile-dialog.component';

@NgModule({
  declarations: [
    MobileDialogComponent,
    AlertDialogComponent,
    DisclaimerDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class CoreModule {}
