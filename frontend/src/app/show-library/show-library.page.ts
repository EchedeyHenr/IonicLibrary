import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-show-library',
  templateUrl: './show-library.page.html',
  styleUrls: ['./show-library.page.scss'],
})
export class ShowLibraryPage implements OnInit {

  books: any = [
    /* {
      id: 1,
      title: "PruebaDeTitulo",
      author: "PruebaDeAuthor",
      isbn: "PruebaDeISBN",
      genre: "PruebaDeGenre",
      publicationYear: 1999
    },
    {
      id: 2,
      title: "PruebaDeTitulo2",
      author: "PruebaDeAuthor2",
      isbn: "PruebaDeISBN2",
      genre: "PruebaDeGenre2",
      publicationYear: 2000
    } */
  ];

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    this.libraryService.getAll().subscribe(response => {
      this.books = response;
    });
  }
}
