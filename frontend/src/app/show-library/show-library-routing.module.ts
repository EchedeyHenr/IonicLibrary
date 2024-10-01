import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowLibraryPage } from './show-library.page';

const routes: Routes = [
  {
    path: '',
    component: ShowLibraryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowLibraryPageRoutingModule {}
