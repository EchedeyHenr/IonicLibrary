import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string = "PruebaTitle";
  author: string = "PruebaAuthor";
  isbn: string = "PruebaIsbn";
  genre: string = "PruebaGenre";
  publicationYear: number = 1999;

  constructor(private router: Router) {}

  showLibrary() {
    this.router.navigateByUrl("/show-library");
  }

}
