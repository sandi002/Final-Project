import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpobtagihanPageRoutingModule } from './ppobtagihan-routing.module';

import { PpobtagihanPage } from './ppobtagihan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpobtagihanPageRoutingModule
  ],
  declarations: [PpobtagihanPage]
})
export class PpobtagihanPageModule {}
