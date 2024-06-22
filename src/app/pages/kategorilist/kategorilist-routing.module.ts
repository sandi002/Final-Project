import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategorilistPage } from './kategorilist.page';

const routes: Routes = [
  {
    path: '',
    component: KategorilistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategorilistPageRoutingModule {}
