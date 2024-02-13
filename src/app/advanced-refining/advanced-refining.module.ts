import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { AdsenseModule } from 'ng2-adsense';
import { AdvancedRefiningRoutingModule } from './advanced-refining-routing.module';
import { AdvancedRefiningItemComponent } from './containers/advanced-refining-item.component';
import { AdvancedRefiningPriceComponent } from './containers/advanced-refining-price.component';
import { AdvancedRefiningComponent } from './containers/advanced-refining.component';

@NgModule({
  declarations: [
    AdvancedRefiningComponent,
    AdvancedRefiningItemComponent,
    AdvancedRefiningPriceComponent,
  ],
  exports: [AdvancedRefiningComponent],
  imports: [
    CommonModule,
    AdvancedRefiningRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatTabsModule,
    MatSnackBarModule,
    MatRadioModule,
    AdsenseModule,
  ],
})
export class AdvancedRefiningModule {}
