import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookComponent, BookslistComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [BookslistComponent]
})
export class BooksModule { }
