import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefiningComponent } from './containers/refining.component';

const routes: Routes = [
  {
    path: 'refining',
    component: RefiningComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefiningRoutingModule {}
