import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpoblistPage } from './ppoblist.page';

const routes: Routes = [
  {
    path: '',
    component: PpoblistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpoblistPageRoutingModule {}
