import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { AdsenseModule } from 'ng2-adsense';
import { RefineTableComponent } from './components/refine-table.component';
import { RefiningItemComponent } from './containers/refining-item.component';
import { RefiningPriceComponent } from './containers/refining-price.component';
import { RefiningComponent } from './containers/refining.component';
import { RefiningRoutingModule } from './refining-routing.module';
import { RefiningBindedComponent } from './containers/refining-binded.component';

@NgModule({
  declarations: [
    RefiningComponent,
    RefineTableComponent,
    RefiningItemComponent,
    RefiningPriceComponent,
    RefiningBindedComponent,
  ],
  exports: [RefiningComponent],
  imports: [
    CommonModule,
    RefiningRoutingModule,
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
    AdsenseModule,
  ],
})
export class RefiningModule {}
