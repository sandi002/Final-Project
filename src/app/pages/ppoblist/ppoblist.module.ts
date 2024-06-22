import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpoblistPageRoutingModule } from './ppoblist-routing.module';

import { PpoblistPage } from './ppoblist.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    PpoblistPageRoutingModule
  ],
  declarations: [PpoblistPage]
})
export class PpoblistPageModule {}
