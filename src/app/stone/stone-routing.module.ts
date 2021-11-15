import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoneComponent } from './containers/stone.component';

const routes: Routes = [
  {
    path: 'stone',
    component: StoneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoneRoutingModule {}
