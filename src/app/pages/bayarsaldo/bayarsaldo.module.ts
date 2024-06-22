import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BayarsaldoPageRoutingModule } from './bayarsaldo-routing.module';

import { BayarsaldoPage } from './bayarsaldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BayarsaldoPageRoutingModule
  ],
  declarations: [BayarsaldoPage]
})
export class BayarsaldoPageModule {}
