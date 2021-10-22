import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintingComponent } from './containers/imprinting.component';

const routes: Routes = [
  {
    path: 'imprinting',
    component: ImprintingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImprintingRoutingModule {}
