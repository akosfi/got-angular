import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charachter } from '../models/charachter.type';


@Injectable()
export class CharachterService {
  constructor(private http: HttpClient) { }
  
  getCharachters() : Observable<Charachter[]> {
    return this.http.get<Charachter[]>("https://www.anapioficeandfire.com/api/characters");
  }

  getCharachter(name: string): Observable<Charachter>{
    return this.http.get<Charachter>("https://www.anapioficeandfire.com/api/characters/?name" + name);
  }
}