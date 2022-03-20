import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DpsComponent } from './containers/dps.component';

const routes: Routes = [
  {
    path: 'dps',
    component: DpsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DpsRoutingModule {}
