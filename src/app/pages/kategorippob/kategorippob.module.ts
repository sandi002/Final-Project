import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategorippobPageRoutingModule } from './kategorippob-routing.module';

import { KategorippobPage } from './kategorippob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategorippobPageRoutingModule
  ],
  declarations: [KategorippobPage]
})
export class KategorippobPageModule {}
