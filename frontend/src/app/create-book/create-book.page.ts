import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibraryService } from '../services/library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.page.html',
  styleUrls: ['./create-book.page.scss'],
})
export class CreateBookPage implements OnInit {

  libraryForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private libraryService: LibraryService,
    private router: Router
  ) { 
    this.libraryForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      author: ['', Validators.compose([Validators.required])],
      isbn: ['', Validators.compose([Validators.required])],
      genre: ['', Validators.compose([Validators.required])],
      publicationYear: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  createBook() {
    if(this.libraryForm.valid) {
      console.log('Valid form: ', this.libraryForm.value);
      this.libraryService.create(this.libraryForm.value).subscribe(res => {
        this.router.navigateByUrl("/show-library");
      })
    } else {
      console.log('Invalid form.');
    }
  }

  getFormControl(field: string) {
    return this.libraryForm.get(field);
  }

  goHome(){
    this.router.navigateByUrl("/");
  }

}
