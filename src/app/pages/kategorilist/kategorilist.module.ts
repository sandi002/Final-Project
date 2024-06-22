import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategorilistPageRoutingModule } from './kategorilist-routing.module';

import { KategorilistPage } from './kategorilist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategorilistPageRoutingModule
  ],
  declarations: [KategorilistPage]
})
export class KategorilistPageModule {}
