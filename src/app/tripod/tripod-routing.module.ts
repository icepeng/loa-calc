import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripodComponent } from './containers/tripod.component';

const routes: Routes = [
  {
    path: 'tripod',
    component: TripodComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripodRoutingModule {}
