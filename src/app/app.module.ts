import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { RouterModule, Routes, Route } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { BookService } from './services/book.service';
import { CharacterService } from './services/character.service';
import { BookDetailsPageComponent } from './components/book-details-page/book-details-page.component';

let routes: Route[] = [
  { path: "", component: BooksPageComponent },
  { path: "books/:name", component: BookDetailsPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [HttpClientModule, BookService, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
