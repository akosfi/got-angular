import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.type';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/models/character.type';


@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css']
})
export class BookDetailsPageComponent implements OnInit {
 
  book: Book;
  charachters: Character[];
  constructor(private route: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getBookDetails(params["name"]).subscribe(book => {
        this.book = book[0];
        console.log(this.book);
      });
    });
  }

  getBookDetails(name: string){
    return this.bookService.getBook(name);
  }


}
