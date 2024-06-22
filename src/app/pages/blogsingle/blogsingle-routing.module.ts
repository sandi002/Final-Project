import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsinglePage } from './blogsingle.page';

const routes: Routes = [
  {
    path: '',
    component: BlogsinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsinglePageRoutingModule {}
