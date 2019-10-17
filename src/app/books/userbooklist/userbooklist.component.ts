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

  constructor(private circulationService : CirculationService, private bookService : BookService, private router : Router, private auth : AuthenticationModel) {
    
   }

  // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
  //   console.log("ON Changes...");
    
  // }

  ngOnInit() {
    //this.bookService.setUserCiruclationBooks([]);
    console.log("ON init...");
    //this.getUserCirculationBooks("");
    
     //test
      this.bookService.getAllBooks(false).subscribe(res => {
        this.availableBooks = res.filter(book => book.bookStatus == "AVAILABLE");
        this.unAvailableBooks = res.filter(book => book.bookStatus != "AVAILABLE");
      });


     this.circulationService.getAllCirculations(false).subscribe(circs => { 
      this.userCirculations = circs.filter(uc => uc.userId == this.auth.getUserDetails().id);
      this.userCirculations.forEach((ucc: Circulation) => {
       
          let book = this.unAvailableBooks.find(book => parseInt(ucc.bookId) == book.id);
          this.userCiruclationBooks.push(book)
      });
    });
   
  } 


  bookIssueRequest(book){ 
    this.selectedBook = book;
  }

  issueBookRequestSuccessEvent(eventData){

    document.getElementById("closePopup").click();

  }

  getUserCirculationBooks(test){
    this.circulationService.getAllCirculations(false).subscribe(circs => {  
      this.userCirculations = circs.filter(uc => uc.userId == this.auth.getUserDetails().id);
      this.userCirculations.forEach(ucc => {
          let book = this.unAvailableBooks.find(nb => nb.id == ucc.bookId);        
            this.userCiruclationBooks.push(book);            
      });
    });
  }

   /**
   * This method, is used to clear the radiobuttons of table component
   */
  closeModal(){
          
  }

  
}
