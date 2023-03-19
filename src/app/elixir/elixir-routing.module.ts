import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElixirPracticeComponent } from './containers/elixir-practice.component';
import { ElixirComponent } from './containers/elixir.component';

const routes: Routes = [
  {
    path: 'elixir',
    component: ElixirComponent,
  },
  {
    path: 'elixir-practice',
    component: ElixirPracticeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElixirRoutingModule {}
