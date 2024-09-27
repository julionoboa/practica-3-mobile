import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiplicarPageRoutingModule } from './multiplicar-routing.module';

import { MultiplicarPage } from './multiplicar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiplicarPageRoutingModule
  ],
  declarations: [MultiplicarPage]
})
export class MultiplicarPageModule {}
