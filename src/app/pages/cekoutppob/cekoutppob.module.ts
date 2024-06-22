import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CekoutppobPageRoutingModule } from './cekoutppob-routing.module';

import { CekoutppobPage } from './cekoutppob.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    CekoutppobPageRoutingModule
  ],
  declarations: [CekoutppobPage]
})
export class CekoutppobPageModule {}
