import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';
import { AccessoryFormComponent } from './components/accessory-form.component';
import { AvatarFormComponent } from './components/avatar-form.component';
import { CardFormComponent } from './components/card-form.component';
import { CommonFormComponent } from './components/common-form.component';
import { EngravingFormComponent } from './components/engraving-form.component';
import { GearFormComponent } from './components/gear-form.component';
import { SetitemFormComponent } from './components/setitem-form.component';
import { SkillActionFormListComponent } from './components/skill-action-form-list.component';
import { SkillActionFormComponent } from './components/skill-action-form.component';
import { SkillFormListComponent } from './components/skill-form-list.component';
import { SkillFormComponent } from './components/skill-form.component';
import { TripodFormComponent } from './components/tripod-form.component';
import { DpsSettingComponent } from './containers/dps-setting.component';
import { DpsComponent } from './containers/dps.component';
import { DpsRoutingModule } from './dps-routing.module';

@NgModule({
  declarations: [
    DpsComponent,
    GearFormComponent,
    AccessoryFormComponent,
    AvatarFormComponent,
    SetitemFormComponent,
    EngravingFormComponent,
    CardFormComponent,
    SkillFormComponent,
    SkillActionFormComponent,
    SkillFormListComponent,
    SkillActionFormListComponent,
    CommonFormComponent,
    DpsSettingComponent,
    TripodFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DpsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule,
  ],
})
export class DpsModule {}
