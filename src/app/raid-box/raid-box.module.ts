import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdsenseModule } from 'ng2-adsense';
import { RaidBoxSearchDialogComponent } from './components/raid-box-search-dialog.component';
import { RaidBoxPriceComponent } from './containers/raid-box-price.component';
import { RaidBoxComponent } from './containers/raid-box.component';
import { RaidBoxRoutingModule } from './raid-box-routing.module';
import { RaidBoxCardComponent } from './containers/raid-box-card.component';

@NgModule({
  declarations: [
    RaidBoxComponent,
    RaidBoxPriceComponent,
    RaidBoxSearchDialogComponent,
    RaidBoxCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule,
    ClipboardModule,
    AdsenseModule,
    RaidBoxRoutingModule,
  ],
})
export class RaidBoxModule {}
