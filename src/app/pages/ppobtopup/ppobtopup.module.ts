import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpobtopupPageRoutingModule } from './ppobtopup-routing.module';

import { PpobtopupPage } from './ppobtopup.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    PpobtopupPageRoutingModule
  ],
  declarations: [PpobtopupPage]
})
export class PpobtopupPageModule {}
