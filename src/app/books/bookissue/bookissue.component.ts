import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { CirculationService } from 'src/app/circulation/circulation.service';
import { AuthenticationModel } from 'src/app/AuthenticationModel';

@Component({
  selector: 'app-bookissue',
  templateUrl: './bookissue.component.html',
  styleUrls: ['./bookissue.component.css']
})
export class BookissueComponent implements OnInit, OnChanges {
  

  default = new Book();
  

  @Input()
  selectedBook :  Book ;

  @Output()
  updateReqBookEve = new EventEmitter();
     
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(!this.selectedBook)
    this.selectedBook = {id : 0, bookName : "", bookStatus : "", author : "", category : ""};
  }

selectedDate = this.getDefaultReturnDate();

  constructor(private auth: AuthenticationModel,
    private bookService :  BookService, private circulationService : CirculationService) { }

  ngOnInit() {
    //alert(this.selectedBook.id);
  }

  bookIssueRequest(){
    this.selectedBook.bookStatus = "REQUESTED";
    this.bookService.bookIssueRequest(this.selectedBook).subscribe(res => {
      console.log("book requested : "+res);
    this.circulationService.createCirculationRequest(this.auth.getUserDetails().id, this.selectedBook, this.selectedDate)
    .subscribe(res => {
      console.log("circulation request created : "+res);
      //this.bookService.getUserCiruclationBooks().push(this.selectedBook);
      this.bookService.getAllBooks();
      this.updateReqBookEve.emit("");
    });
    });
  }

  getDefaultReturnDate() : string{

  let date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
    
    if (month < 10) 
    {month =  month;}
    if (day < 10) 
    {day = day};
    
    return year + "-" + month + "-" + day;  
    //return day+ "-" + month + "-" + year;
  }
}
