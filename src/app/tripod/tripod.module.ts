import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { AdsenseModule } from 'ng2-adsense';
import { TripodFormComponent } from './components/tripod-form.component';
import { TripodItemViewComponent } from './components/tripod-item-view.component';
import { TripodSearchDialogComponent } from './components/tripod-search-dialog.component';
import { TripodTableComponent } from './components/tripod-table.component';
import { TripodComponent } from './containers/tripod.component';
import { TripodRoutingModule } from './tripod-routing.module';
import { TripodSingleListComponent } from './components/tripod-single-list.component';

@NgModule({
  declarations: [
    TripodComponent,
    TripodFormComponent,
    TripodTableComponent,
    TripodItemViewComponent,
    TripodSearchDialogComponent,
    TripodSingleListComponent,
  ],
  imports: [
    CommonModule,
    TripodRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatIconModule,
    MatSlideToggleModule,
    ClipboardModule,
    AdsenseModule,
  ],
})
export class TripodModule {}
