import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.type';


@Injectable()
export class CharacterService {
  constructor(private http: HttpClient) { }
  
  getCharachters() : Observable<Character[]> {
    return this.http.get<Character[]>("https://www.anapioficeandfire.com/api/characters");
  }

  getCharachter(name: string): Observable<Character>{
    return this.http.get<Character>("https://www.anapioficeandfire.com/api/characters/?name" + name);
  }
}