import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduklistPageRoutingModule } from './produklist-routing.module';

import { ProduklistPage } from './produklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProduklistPageRoutingModule
  ],
  declarations: [ProduklistPage]
})
export class ProduklistPageModule {}
