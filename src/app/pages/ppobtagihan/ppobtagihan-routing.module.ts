import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpobtagihanPage } from './ppobtagihan.page';

const routes: Routes = [
  {
    path: '',
    component: PpobtagihanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpobtagihanPageRoutingModule {}
