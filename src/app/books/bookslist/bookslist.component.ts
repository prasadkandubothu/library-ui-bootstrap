import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from 'src/app/apphttpclient.service';
import { Book } from '../book';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit {

  books : any;
  selectedBook : Book;
  isEdit = false;

  constructor(private _httpService : ApphttpclientService) {
   this.selectedBook = new Book("","","","",null);
   }

  modaTitle = "Add Book";

  ngOnInit(): void {
    this._httpService.get("books").subscribe((res) => {
      this.books = res;
      console.log(res);
    });
    this._httpService.get("users").subscribe((res) => {
      console.log(res);
    });
  }

  selectedBookDetails(bookInfo) {
    this.selectedBook = bookInfo;
    console.log(this.selectedBook);
  }

  editBook(e){
    this.isEdit = true;
  if(this.selectedBook.bookName == ""){
    alert("Please select book details");
    console.log(e);
    e.stopPropagation();
  }
  return false;
    //this.bookName = this.selectedBook.bookName;
  }

  addBook(){
    //this.selectedBook = null;
    this.selectedBook = new Book("","","","",null);
    this.isEdit = false;
  
  }

  closeModal(){
   // alert(document.querySelectorAll<HTMLInputElement>("input[name=bookInfo]:checked").length);
   
    if(document.querySelectorAll<HTMLInputElement>("input[name=bookInfo]:checked").length > 0)
    {
      document.querySelectorAll<HTMLInputElement>("input[name=bookInfo]:checked")[0].checked = false;
      
    }
    this.isEdit = false;
  }

}
