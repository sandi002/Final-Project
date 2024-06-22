import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CariprodukPageRoutingModule } from './cariproduk-routing.module';

import { CariprodukPage } from './cariproduk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CariprodukPageRoutingModule
  ],
  declarations: [CariprodukPage]
})
export class CariprodukPageModule {}
