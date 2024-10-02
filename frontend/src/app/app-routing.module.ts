import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'show-library',
    loadChildren: () => import('./show-library/show-library.module').then( m => m.ShowLibraryPageModule)
  },
  {
    path: 'create-book',
    loadChildren: () => import('./create-book/create-book.module').then( m => m.CreateBookPageModule)
  },
  {
    path: 'update-book',
    loadChildren: () => import('./update-book/update-book.module').then( m => m.UpdateBookPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
