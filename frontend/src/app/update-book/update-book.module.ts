import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBookPageRoutingModule } from './update-book-routing.module';

import { UpdateBookPage } from './update-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBookPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateBookPage]
})
export class UpdateBookPageModule {}
