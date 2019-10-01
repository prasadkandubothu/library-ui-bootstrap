import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Book } from '../book';
import { LoaderService } from 'src/app/loader.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private elRef: ElementRef, private loader : LoaderService) { }

  @Input() book : Book;
  @Input() isEdit : boolean;
   ngOnInit() {
     console.log("isEdit : "+this.isEdit);
  }

  @Output() saveEvent = new EventEmitter<any>();




  saveBook(){
    this.loader.loaderStart();
    console.log("in book "+ this.book.bookName);
    this.book = new Book();
    this.loader.loaderEnd();
   this.saveEvent.emit("success...1");
  }
}
