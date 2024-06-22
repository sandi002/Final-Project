import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpobtopupPage } from './ppobtopup.page';

const routes: Routes = [
  {
    path: '',
    component: PpobtopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpobtopupPageRoutingModule {}
