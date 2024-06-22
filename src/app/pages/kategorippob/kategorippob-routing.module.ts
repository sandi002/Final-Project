import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategorippobPage } from './kategorippob.page';

const routes: Routes = [
  {
    path: '',
    component: KategorippobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategorippobPageRoutingModule {}
