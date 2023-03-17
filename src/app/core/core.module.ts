import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MobileDialogComponent } from './components/mobile-dialog.component';
import { AlertDialogComponent } from './components/alert-dialog.component';
import { LoadingDialogComponent } from './components/loading-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    MobileDialogComponent,
    AlertDialogComponent,
    LoadingDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class CoreModule {}
