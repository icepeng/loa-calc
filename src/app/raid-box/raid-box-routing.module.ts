import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaidBoxComponent } from './containers/raid-box.component';

const routes: Routes = [
  {
    path: 'raid-box',
    component: RaidBoxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaidBoxRoutingModule {}
