import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-library',
  templateUrl: './show-library.page.html',
  styleUrls: ['./show-library.page.scss'],
})
export class ShowLibraryPage implements OnInit {

  books: any = [];

  constructor(private libraryService: LibraryService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.getAllBooks();
  }

  getAllBooks(){
    this.libraryService.getAll().subscribe(response => {
      this.books = response;
    });
  }

  deleteBook(id: any){
    this.libraryService.delete(id).subscribe(response => {
      this.getAllBooks();
      console.log("Borrado.");
    });
  }

  goHomeButton(){
    this.router.navigateByUrl("/");
  }

  updatedBook(id: any){
    this.router.navigate(['/update-book', id]);
  }

  
}
