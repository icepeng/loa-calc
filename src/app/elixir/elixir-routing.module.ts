import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElixirComponent } from './containers/elixir.component';

const routes: Routes = [
  {
    path: 'elixir',
    component: ElixirComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElixirRoutingModule {}
