import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { CouncilDialogComponent } from './components/council-dialog.component';
import { EffectDialogComponent } from './components/effect-dialog.component';
import { ElixirEffectComponent } from './components/elixir-effect.component';
import { ElixirPracticeSageComponent } from './components/elixir-practice-sage.component';
import { ElixirSageComponent } from './components/elixir-sage.component';
import { ElixirPracticeComponent } from './containers/elixir-practice.component';
import { ElixirComponent } from './containers/elixir.component';
import { ElixirRoutingModule } from './elixir-routing.module';

@NgModule({
  declarations: [
    ElixirPracticeComponent,
    ElixirComponent,
    ElixirEffectComponent,
    ElixirSageComponent,
    CouncilDialogComponent,
    EffectDialogComponent,
    ElixirPracticeSageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ElixirRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class ElixirModule {}
