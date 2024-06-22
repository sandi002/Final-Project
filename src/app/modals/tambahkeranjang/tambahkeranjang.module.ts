import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahkeranjangPageRoutingModule } from './tambahkeranjang-routing.module';

import { TambahkeranjangPage } from './tambahkeranjang.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FontAwesomeModule,
    TambahkeranjangPageRoutingModule
  ],
  declarations: [TambahkeranjangPage]
})
export class TambahkeranjangPageModule {}
