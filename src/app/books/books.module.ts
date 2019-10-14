import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BookissueComponent } from './bookissue/bookissue.component';
import { UserbooklistComponent } from './userbooklist/userbooklist.component';

@NgModule({
  declarations: [BookComponent, BookslistComponent, BookissueComponent, UserbooklistComponent],
  imports: [
    CommonModule,
    FormsModule,

    SharedModule
  ],
  exports : [BookslistComponent]
})
export class BooksModule { }
