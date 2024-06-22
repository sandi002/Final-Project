import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BayarsaldoPage } from './bayarsaldo.page';

const routes: Routes = [
  {
    path: '',
    component: BayarsaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BayarsaldoPageRoutingModule {}
