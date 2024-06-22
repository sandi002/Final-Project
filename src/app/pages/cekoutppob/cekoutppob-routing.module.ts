import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CekoutppobPage } from './cekoutppob.page';

const routes: Routes = [
  {
    path: '',
    component: CekoutppobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CekoutppobPageRoutingModule {}
