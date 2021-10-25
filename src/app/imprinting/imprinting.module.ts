import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ComposeTableComponent } from './components/compose-table.component';
import { ItemViewComponent } from './components/item-view.component';
import { AccFormComponent } from './containers/acc-form.component';
import { ImprintingFormComponent } from './containers/imprinting-form.component';
import { ImprintingComponent } from './containers/imprinting.component';
import { ImprintingRoutingModule } from './imprinting-routing.module';

@NgModule({
  declarations: [
    ImprintingComponent,
    ItemViewComponent,
    ImprintingFormComponent,
    AccFormComponent,
    ComposeTableComponent,
  ],
  imports: [
    CommonModule,
    ImprintingRoutingModule,
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
    MatPaginatorModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    ClipboardModule,
  ],
})
export class ImprintingModule {}
