import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from 'src/app/apphttpclient.service';
import { Book } from '../book';
import { AuthenticationModel } from 'src/app/AuthenticationModel';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit {

  books : any;
  selectedBook : Book;
  isEdit = false;
  modalWindowTitle = "Add Book";

  constructor(private _httpService : ApphttpclientService, private auth :AuthenticationModel) {
   this.selectedBook = new Book();
   }

  
  ngOnInit(): void {
    this._httpService.get("books").subscribe((res) => {
      this.books = res;
   
    });
    this._httpService.get("users").subscribe((res) => {
   
    });
  }

  selectedBookDetails(bookInfo) {
    this.selectedBook = bookInfo;
    console.log("slected book : "+this.selectedBook);
  }

  editBook(e){
    this.modalWindowTitle = "Edit Book";
    this.isEdit = true; 
  if(this.selectedBook.bookName == "" || this.selectedBook.bookName == undefined){
    alert("Please select book details");
    console.log(e);
    e.stopPropagation();
  }
  return false;
  }

  addBook(){
    this.modalWindowTitle = "Add Book";
    //this.selectedBook = new Book();
    this.isEdit = false;
  }

  closeModal(){
   
    if(document.querySelectorAll<HTMLInputElement>("input[name=bookInfo]:checked").length > 0)
    {
      document.querySelectorAll<HTMLInputElement>("input[name=bookInfo]:checked")[0].checked = false;
    }
    this.selectedBook = new Book();
    this.isEdit = false;
  }

  saveBookAck($event){
    document.getElementById("closePopup").click();
    console.log("--"+$event);
   

  }
}
