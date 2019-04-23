import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { RouterModule, Routes, Route } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { BookService } from './services/book.service';
import { CharachterService } from './services/charachter.service';

let routes: Route[] = [
  { path: "", component: BooksPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [HttpClientModule, BookService, CharachterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
