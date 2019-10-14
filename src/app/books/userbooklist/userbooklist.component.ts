import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { AuthenticationModel } from 'src/app/AuthenticationModel';
import { Book } from '../book';

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

  bookColumns = [ "ID"];
  searchColumns : string [] = ['id', 'bookName']; 

  userCirculations = [];
  userCiruclationBooks=[];

  constructor(private bookService : BookService, private router : Router, private auth : AuthenticationModel) { }

  ngOnInit() {
    //this.bookService.setUserCiruclationBooks([]);
    this.getUserCirculationBooks("");
  }


  bookIssueRequest(book){ 
    this.selectedBook = book;
  }

  getUserCirculationBooks(test){ 
    this.bookService.getCirulationsByUser().subscribe(userbooks => {
      this.userCirculations = userbooks.filter(uc => uc.userId == this.auth.getUserDetails().id);
      this.userCirculations.forEach(ucc => {
          let book = this.bookService.getUnavalableBooks().find(nb => nb.id == ucc.bookId);
            this.userCiruclationBooks.push(book);
            //this.bookService.getUserCiruclationBooks().push(book);
      });
    });
  }

   /**
   * This method, is used to clear the radiobuttons of table component
   */
  closeModal(){
          
  }

  
}
