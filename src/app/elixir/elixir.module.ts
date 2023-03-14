import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ElixirComponent } from './containers/elixir.component';
import { ElixirRoutingModule } from './elixir-routing.module';
import { ElixirEffectComponent } from './components/elixir-effect.component';
import { ElixirSageComponent } from './components/elixir-sage.component';

@NgModule({
  declarations: [ElixirComponent, ElixirEffectComponent, ElixirSageComponent],
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
  ],
})
export class ElixirModule {}
