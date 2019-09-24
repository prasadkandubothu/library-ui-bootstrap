import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Book } from '../book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  @Input() book : Book;
  @Input() isEdit : boolean;
   ngOnInit() {
     console.log("isEdit : "+this.isEdit);
  }

  @Output() saveEvent = new EventEmitter<any>();




  saveBook(){
    console.log("in book "+ this.book.bookName);
    this.book = new Book();
   
   this.saveEvent.emit("success...1");
  }
}
