import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarikPage } from './tarik.page';

const routes: Routes = [
  {
    path: '',
    component: TarikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarikPageRoutingModule {}
