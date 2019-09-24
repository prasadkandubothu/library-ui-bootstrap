import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BookComponent, BookslistComponent],
  imports: [
    CommonModule,
    FormsModule,

    SharedModule
  ],
  exports : [BookslistComponent]
})
export class BooksModule { }
