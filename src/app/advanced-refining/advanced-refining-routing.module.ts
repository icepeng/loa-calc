import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedRefiningComponent } from './containers/advanced-refining.component';

const routes: Routes = [
  {
    path: 'advanced-refining',
    component: AdvancedRefiningComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedRefiningRoutingModule {}
