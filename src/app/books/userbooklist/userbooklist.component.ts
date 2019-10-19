import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { AuthenticationModel } from 'src/app/AuthenticationModel';
import { Book } from '../book';
import { Circulation } from 'src/app/circulation/circulation.modal';
import { CirculationService } from 'src/app/circulation/circulation.service';

@Component({
  selector: 'app-userbooklist',
  templateUrl: './userbooklist.component.html',
  styleUrls: ['./userbooklist.component.css']
})
export class UserbooklistComponent implements OnInit {
 

  @Input()
  booksAvailable = [];
  @Input()
  booksNotAvailable = [];

  selectedBook : Book ;
  availableSearchText = "";
  searchText = "";

  bookColumns = [ "ID"];
  searchColumns : string [] = ['id', 'bookName']; 

  userCirculations = [];
  userCiruclationBooks : Book[]=[];
  availableBooks : Book[] = [];
  unAvailableBooks : Book[] = [];


  circulationBookColumns = ['BOOK ID', 'BOOK NAME', 'AUTHOR', 'BOOK STAATUS', 'ACTION'];
  availableBookColumns = ['BOOK ID', 'BOOK NAME', 'AUTHOR', 'ACTION'];

  constructor(private circulationService : CirculationService, private bookService : BookService, private router : Router, private auth : AuthenticationModel) {
    
   }


  ngOnInit() {
    console.log("ON init...");
    
     //test
      this.bookService.getAllBooks(false).subscribe(res => {
        this.availableBooks = res.filter(book => book.bookStatus == "AVAILABLE");
        this.unAvailableBooks = res.filter(book => book.bookStatus != "AVAILABLE");
      });
      
    this.processUserCirculationBooks();
  } 

  processUserCirculationBooks(){ console.log("processing user circulation books");
    this.circulationService.getAllCirculations(false).subscribe(circs => {
      this.userCiruclationBooks = []; 
      this.userCirculations = circs.filter(uc => uc.userId == this.auth.getUserDetails().id);
      this.userCirculations.forEach((ucc: Circulation) => {       
        let book = this.unAvailableBooks.find(book => parseInt(ucc.bookId) == book.id);
          if(book!= undefined && book.id){  console.log("user process book : "+book.id);
            this.userCiruclationBooks.push(book);
          }
      });     
    });    
  }

  bookIssueRequest(book){ 
    console.log("selected book : "+book.id)
    this.selectedBook = book;
  }

  issueBookRequestSuccessEvent(eventData){
    document.getElementById("closePopup").click();
    this.processUserCirculationBooks();
  }

  getUserCirculationBooks1(test){
    this.circulationService.getAllCirculations(false).subscribe(circs => {  
      this.userCirculations = circs.filter(uc => uc.userId == this.auth.getUserDetails().id);
      this.userCirculations.forEach(ucc => {
          let book = this.unAvailableBooks.find(nb => nb.id == ucc.bookId);        
            this.userCiruclationBooks.push(book);            
      });
    });
  }


  returnOrCancelRequest(book : Book){
    book.bookStatus = "AVAILABLE";
    let circulation =this.userCirculations.find((uc : Circulation) => parseInt(uc.bookId) == book.id);
    this.circulationService.deleteCirculationObservable(circulation.id).subscribe(res => {
      this.bookService.updateBookObservable(book).subscribe(res => {
        console.log("book success fully Canceled or Returned");
        this.bookService.getAllBooks(true);
        this.circulationService.getAllCirculations(true);
      });
    });
    this.bookService.bookIssueRequest(book)
  }


   /**
   * This method, is used to clear the radiobuttons of table component
   */
  closeModal(){
          
  }

  
}
