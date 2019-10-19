import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from 'src/app/apphttpclient.service';
import { Circulation } from '../circulation.modal';
import { CirculationService } from '../circulation.service';
import { AuthenticationModel } from 'src/app/AuthenticationModel';
import { AppToastrService } from 'src/app/app-toastr.service';
import { BookService } from 'src/app/books/book.service';
import { Book } from 'src/app/books/book';

@Component({
  selector: 'app-circulationlist',
  templateUrl: './circulationlist.component.html',
  styleUrls: ['./circulationlist.component.css']
})
export class CirculationlistComponent implements OnInit {

  inProgressCirculations : Circulation[] = [];
  //myCirculations : Circulation[] = [];
  ciuculationColumns = ["ID", "BOOK ID", "USER ID"]; 
  adminExtraColumns = ["APPROVE", "DECLINE"];
  userExtraColumns = ["RETURN"];
  searchColumns = ["id"];
  searchText : "";
  totalColumns = 5;

  books : Book[] ;

  constructor(private bookService : BookService, private toastr : AppToastrService, private circulationService : CirculationService, private authModel : AuthenticationModel) { 
    console.log("ciculationlist constructor......!");
  }

  //Load the circulations from service or server
  ngOnInit() {
    this.circulationService.getAllCirculations(false).subscribe((res : Circulation[]) => {
      console.log("*** :"+res);
          this.inProgressCirculations = res.filter(c => c.status == "INPROGRESS")        
    }) 
  }

  //For Approver or Decline Operations
  approveOrDeclineCirculation(circulation, action){ 
      this.getAllBooks().subscribe(res => {
        this.books = res;
        if(action === "APPROVE")
          this.circulationService.approverOrDeclineCiruclation(circulation, "ISSUED", this.books);
        else
        this.circulationService.approverOrDeclineCiruclation(circulation, "AVAILABLE" , this.books);
      });  
  }
  
  //Load all the books from bookService
  getAllBooks(){
   return  this.bookService.getAllBooks(false);
  }

}
