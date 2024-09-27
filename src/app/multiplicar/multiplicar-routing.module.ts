import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiplicarPage } from './multiplicar.page';

const routes: Routes = [
  {
    path: '',
    component: MultiplicarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiplicarPageRoutingModule {}
