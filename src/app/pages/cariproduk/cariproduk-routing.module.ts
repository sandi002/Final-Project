import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CariprodukPage } from './cariproduk.page';

const routes: Routes = [
  {
    path: '',
    component: CariprodukPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CariprodukPageRoutingModule {}
