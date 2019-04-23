import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.type';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BookService {
  constructor(private http: HttpClient) { }
  
  getBooks() : Observable<Book[]> {
    return this.http.get<Book[]>("https://www.anapioficeandfire.com/api/books");
  }

  getBook(name: string): Observable<Book>{
    return this.http.get<Book>("https://www.anapioficeandfire.com/api/books/?name=" + name);
  }
}
