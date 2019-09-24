import { Component, OnInit, ViewChild } from '@angular/core';
import { ApphttpclientService } from 'src/app/apphttpclient.service';
import { Book } from '../book';
import { AuthenticationModel } from 'src/app/AuthenticationModel';
import { TableService } from 'src/app/shared/components/table/table.service';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { ToastrService } from 'ngx-toastr';
import { AppToastrService } from 'src/app/app-toastr.service';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit {


  selectedBook : Book;
  isEdit = false;
  modalWindowTitle = "Add Book";
  
  //table component inputs
  actionColumn = false;
  tableHeading : string = "Books Details"
  bookColumns = ["BOOK ID", "BOOK NAME", "AUTHOR NAME", "CATEGORY", "ID", "BOOK STATUS"];
  books : any;
  keys = ["bookId", "bookName", "author","category","id", "bookStatus"];
  searchColumns : string [] = ['bookId', 'bookName'];  
  filterColumns : string [] = ['bookStatus'];
  filterOptions : string [] = ['AVAILABLE', 'ISSUED', 'RESERVED']

  @ViewChild(TableComponent)
  tableComponent : TableComponent;

  constructor(private toastr : AppToastrService,private _httpService : ApphttpclientService, private auth :AuthenticationModel,
    private tableService : TableService) {
   this.selectedBook = new Book();
   }

  
  ngOnInit(): void {
    this._httpService.get("books").subscribe((res) => {
      this.books = res;
   
    });
    
    console.log(this.auth.getUserRole());
    if(this.auth.getUserRole() == "admin")
      this.actionColumn =true;
    else
      this.actionColumn=false;
   
  }

  /**
   * This method, to get the selected bookitem/radio button from table component
   * @param bookInfo from table component selected item
   */
  selectedBookDetails(bookInfo) {
    this.selectedBook = bookInfo;
    console.log("sin booklist lected book : "+this.selectedBook);
  }

  /**
   * This method to handle edit button event
   * @param click event
   */

  editBook(e){
    this.modalWindowTitle = "Edit Book";
    this.isEdit = true; 
      if(this.selectedBook.bookName == "" || this.selectedBook.bookName == undefined){
        //alert("Please select book details");
        this.toastr.error("Please select book to edit");
        e.stopPropagation();
      }
  /*return false;*/
  }

  /**
   * This method is used for add book event
   */
  addBook(){
    this.modalWindowTitle = "Add Book";
    this.selectedBook = new Book();
    this.isEdit = false;
  }

  /**
   * This method, is used to clear the radiobuttons of table component
   */
  closeModal(){
    this.isEdit = false;
    this.tableComponent.clearSelectedRadioButtons();
    if(this.selectedBook){
      this.selectedBook = new Book();
    }
  }

  saveBookAck($event){
    document.getElementById("closePopup").click();
    console.log("--"+$event);
  }

}
