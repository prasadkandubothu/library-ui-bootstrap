import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/books/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute){}

  book : any ;

  ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => { 
    //console.log(JSON.parse(params.get("book")).id);
    this.book = params.get("book");
  });
  }
  toggleAutoComple = false;
  bookName = "";
  searchColumns = ["bookName"];
  selectedBook : Book;

  onSearchChange(value){
    console.log("=="+value);
    this.toggleAutoComple=true;
    
    if(value == ""){
      this.toggleAutoComple=false;
    }
   // alert(value + " -- "+this.toggleAutoComple);
    
  }

  selectedBookInfo(book : Book){
    console.log("selected : "+book);
    this.toggleAutoComple=false;
    this.bookName = book.bookName;
  }
 
  books = [
    {
      "bookName": "Java by James",
      "author": "James",
      "category": "coding",
      "id": 1,
      "bookStatus": "AVAILABLE"
    },
    {
      "id": 2,
      "bookName": "Wndiows by Gates",
      "author": "Gates",
      "publications": "Vikram Publications",
      "category": "coding",
      "bookStatus": "ISSUED"
    },
    {
      "id": 3,
      "bookName": "C by Dennies",
      "author": "Dennies",
      "publications": "Vikram Publications",
      "category": "coding",
      "bookStatus": "RESERVED"
    },
    {
      "id": 4,
      "bookName": "CPU by Charles",
      "author": "Charles",
      "publications": "Vikram Publications",
      "category": "coding",
      "bookStatus": "AVAILABLE"
    },
    {
      "bookName": "ttt",
      "author": "tt",
      "category": "tt",
      "id": 5,
      "bookStatus": "AVAILABLE"
    },
    {
      "bookStatus": "AVAILABLE",
      "bookName": "rr",
      "author": "rr",
      "category": "rr",
      "id": 6
    },
    {
      "bookStatus": "AVAILABLE",
      "bookName": "sdfgsdf",
      "author": "gsdfg",
      "category": "sdfg",
      "id": 7
    },
    {
      "bookStatus": "AVAILABLE",
      "bookName": "navanee",
      "author": "navane",
      "category": "code",
      "id": 8
    }
  ];

  users = [
    {
      "firstname": "prasad",
      "lastname": "prasad",
      "username": "prasad",
      "password": "prasad",
      "role": "user",
      "id": 2
    },
    {
      "firstname": "admin",
      "lastname": "admin",
      "username": "admin",
      "password": "admin",
      "role": "admin",
      "id": 1
    },
    {
      "username": "ddd",
      "lastname": "dd",
      "id": 3
    },
    {
      "firstname": "ddss",
      "lastname": "ss",
      "username": "ss",
      "id": 4
    },
    {
      "firstname": "dddd",
      "username": "ssssss",
      "id": 5
    },
    {
      "firstname": "dd",
      "lastname": "dddd",
      "username": "ddd",
      "id": 6
    }
  ];
}
