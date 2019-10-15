import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { AuthenticationModel } from 'src/app/AuthenticationModel';
import { Book } from '../book';
import { Circulation } from 'src/app/circulation/circulation.modal';

@Component({
  selector: 'app-userbooklist',
  templateUrl: './userbooklist.component.html',
  styleUrls: ['./userbooklist.component.css']
})
export class UserbooklistComponent implements OnInit, OnChanges {
 

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

  constructor(private bookService : BookService, private router : Router, private auth : AuthenticationModel) {
    
   }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("ON Changes...");
    
  }

  ngOnInit() {
    //this.bookService.setUserCiruclationBooks([]);
    console.log("ON init...");
    //this.getUserCirculationBooks("");
    
     //test
     this.bookService.getCirulationsData().subscribe(circs => { 
      this.userCirculations = circs.filter(uc => uc.userId == this.auth.getUserDetails().id);
      this.userCirculations.forEach(ucc => {
        console.log(this.bookService.getUnavalableBooks()); 
       
       //.find(nb => nb.id == ucc.bookId);
        //alert(book);
        //this.userCiruclationBooks.push(book);
      });
      //console.log(this.userCirculations.length);
    });
   
  }


  bookIssueRequest(book){ 
    this.selectedBook = book;
  }

  issueBookRequestSuccessEvent(eventData){

    document.getElementById("closePopup").click();

  }

  getUserCirculationBooks(test){
    this.bookService.getCirulationsData().subscribe(circs => {  console.log("hi" +circs);
      this.userCirculations = circs.filter(uc => uc.userId == this.auth.getUserDetails().id);
      this.userCirculations.forEach(ucc => {
          let book = this.bookService.getUnavalableBooks().find(nb => nb.id == ucc.bookId);
        
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
