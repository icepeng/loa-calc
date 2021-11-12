import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { ImprintingComponent } from './containers/imprinting.component';

const routes: Routes = [
  {
    path: 'imprinting',
    component: ImprintingComponent,
    canDeactivate: [CanDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImprintingRoutingModule {}
