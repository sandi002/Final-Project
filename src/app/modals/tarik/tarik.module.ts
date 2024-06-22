import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarikPageRoutingModule } from './tarik-routing.module';

import { TarikPage } from './tarik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarikPageRoutingModule
  ],
  declarations: [TarikPage]
})
export class TarikPageModule {}
