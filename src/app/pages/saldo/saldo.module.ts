import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaldoPageRoutingModule } from './saldo-routing.module';

import { SaldoPage } from './saldo.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    SaldoPageRoutingModule
  ],
  declarations: [SaldoPage]
})
export class SaldoPageModule {}
