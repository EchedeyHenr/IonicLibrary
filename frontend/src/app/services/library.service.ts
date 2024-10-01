import { HttpClient } from '@angular/common/http';
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
}
