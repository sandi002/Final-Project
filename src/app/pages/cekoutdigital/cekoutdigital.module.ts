import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CekoutdigitalPageRoutingModule } from './cekoutdigital-routing.module';

import { CekoutdigitalPage } from './cekoutdigital.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CekoutdigitalPageRoutingModule
  ],
  declarations: [CekoutdigitalPage]
})
export class CekoutdigitalPageModule {}
