import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahkeranjangPage } from './tambahkeranjang.page';

const routes: Routes = [
  {
    path: '',
    component: TambahkeranjangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahkeranjangPageRoutingModule {}
