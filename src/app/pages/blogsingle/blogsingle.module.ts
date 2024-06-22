import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogsinglePageRoutingModule } from './blogsingle-routing.module';

import { BlogsinglePage } from './blogsingle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogsinglePageRoutingModule
  ],
  declarations: [BlogsinglePage]
})
export class BlogsinglePageModule {}
