import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Book } from '../book';
import { LoaderService } from 'src/app/loader.service';
import { ApphttpclientService } from 'src/app/apphttpclient.service';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService : BookService, private elRef: ElementRef, private loader : LoaderService, private httpClientService : ApphttpclientService) { }

  @Input() book : Book;
  @Input() isEdit : boolean;
   ngOnInit() {
     console.log("isEdit : "+this.isEdit);
  }

  @Output() saveEvent = new EventEmitter<any>();


  saveBook(){
    this.loader.loaderStart();
    console.log("in book "+ this.book);
    if(this.isEdit){ console.log("edit book called...****"+ this.book.id);
      this.httpClientService.put('books/'+this.book.id, this.book).subscribe(res => {
        console.log("book updated" + res);
        this.bookService.getAllBooks(true);
      });
    }
    else{ 
    this.httpClientService.post('books', this.book).subscribe(res => {
      console.log(res);
      console.log("book saved");
      this.bookService.getAllBooks(true);
    });
  }
   
    this.book = new Book();
    this.loader.loaderEnd();
   this.saveEvent.emit("success...1");
   
  }
}
