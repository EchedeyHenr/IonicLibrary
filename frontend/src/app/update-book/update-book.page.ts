import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.page.html',
  styleUrls: ['./update-book.page.scss'],
})
export class UpdateBookPage implements OnInit {

  book: any = {};

  constructor(
    private route: ActivatedRoute,
    private libraryService: LibraryService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID del libro:', id);
    if (id) {
      this.showBook(id);
    } else {
      console.error("This id is not valid");
    }
  }

  showBook(id: string) {
    this.libraryService.findById(id).subscribe(
      (data: any) => {
      this.book = data;
    },
      (error: any) => {
        console.error('Error loading book data', error);
      }
    );
  }

  updateBook() {
    this.libraryService.update(this.book.id, this.book).subscribe((res: any) => {
      this.router.navigate(['/show-library']);
    },
      (error: any) => {
        console.error('Error updating book data', error);
      }
    );
  }

}
