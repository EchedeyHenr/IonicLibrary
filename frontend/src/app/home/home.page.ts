import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  currentQuote: string = '';

  constructor(private router: Router,
    private quoteService: QuotesService
  ) {}

  ionViewWillEnter() {
    this.currentQuote = this.quoteService.getRandomQuote();
  }

  showLibrary() {
    this.router.navigateByUrl("/show-library");
  }

  goToCreateBook() {
    this.router.navigateByUrl("/create-book");
  }

}
