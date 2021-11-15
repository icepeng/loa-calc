import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { StoneSymbolComponent } from './components/stone-symbol.component';
import { StoneGoalComponent } from './containers/stone-goal.component';
import { StoneComponent } from './containers/stone.component';
import { StoneRoutingModule } from './stone-routing.module';

@NgModule({
  declarations: [StoneComponent, StoneSymbolComponent, StoneGoalComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoneRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
  ],
})
export class StoneModule {}
