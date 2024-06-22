import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduklistPage } from './produklist.page';

const routes: Routes = [
  {
    path: '',
    component: ProduklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduklistPageRoutingModule {}
