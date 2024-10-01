import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowLibraryPageRoutingModule } from './show-library-routing.module';

import { ShowLibraryPage } from './show-library.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowLibraryPageRoutingModule
  ],
  declarations: [ShowLibraryPage]
})
export class ShowLibraryPageModule {}
