import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  endpoint : string = 'http://localhost:8080/api/libraries';

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get(this.endpoint);
  }

  create(book: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("title", book.title);
    body.append("author", book.author);
    body.append("isbn", book.isbn);
    body.append("genre", book.genre);
    body.append("publicationYear", book.publicationYear);

    return this.httpClient.post(this.endpoint, body.toString(), { headers });
  }

  delete(id: any){
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  update(id: any, dataBook: any){
    return this.httpClient.put(`${this.endpoint}/${id}`, dataBook);
  }

  findById(id: any){
    return this.httpClient.get(`${this.endpoint}/${id}`);
  }
}
