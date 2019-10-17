import { Component, OnInit, ViewChild } from '@angular/core';
import { ApphttpclientService } from 'src/app/apphttpclient.service';
import { Book } from '../book';
import { AuthenticationModel } from 'src/app/AuthenticationModel';
import { TableService } from 'src/app/shared/components/table/table.service';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { ToastrService } from 'ngx-toastr';
import { AppToastrService } from 'src/app/app-toastr.service';
import { LoaderService } from 'src/app/loader.service';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit {

  selectedBook : Book;
  isEdit = false;
  modalWindowTitle = "Add Book";
  booksAvailable = [];
  booksNotAvailable = [];
 
  
  //table component inputs
  actionColumn = false;
  tableHeading : string = "Books Details"
  bookColumns = [ "ID", "BOOK NAME", "AUTHOR NAME", "CATEGORY", "BOOK STATUS"];
  books : Book[] = [];
  keys = ["id",  "bookName", "author","category", "bookStatus"];
  searchColumns : string [] = ['id', 'bookName'];  
  filterColumns : string [] = ['bookStatus'];
  filterOptions : string [] = ['AVAILABLE', 'ISSUED', 'RESERVED']
  isLoaderDisplay : boolean = false;

  @ViewChild(TableComponent)
  tableComponent : TableComponent;

  constructor(private router :Router, private bookService : BookService, private toastr : AppToastrService,private _httpService : ApphttpclientService, private auth :AuthenticationModel,
    private tableService : TableService, private loader : LoaderService) {
   this.selectedBook = new Book();
   this.isLoaderDisplay = true;
      
  console.log("Book List constructor=================================");
  console.log("get books server call made");
  console.log(this.auth.getUserRole());
  if(this.auth.getUserRole() == "admin")
    this.actionColumn =true;
  else
    this.actionColumn=false;
 
   }

  
  ngOnInit(): void {
    this.bookService.getAllBooks(false).subscribe(res => {
      this.isLoaderDisplay = false;
      this.books = res;
      this.booksAvailable = res.filter(book => book.bookStatus == 'AVAILABLE');
      this.booksNotAvailable = res.filter(book => book.bookStatus != 'AVAILABLE');
    });
    
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

  deleteBook(){
    console.log(this.selectedBook.id);
    if(this.selectedBook.id == undefined)
    {
      this.toastr.error("Please select Book to delete");
      return false;
    }
    console.log("book selected to delete "+this.selectedBook.id);
   
    this.bookService.deleteBook(this.selectedBook.id);
    this.selectedBook = new Book();
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


  // getUserBooks(){
  //   this.bookService.getBooksByUser().subscribe(userbooks => {
  //     this.userCirculations = userbooks.filter(uc => uc.userId == this.auth.getUserDetails().id);
  //     this.userCirculations.forEach(ucc => {
  //         this.userBooks = this.booksNotAvailable.filter(nb => nb.id == ucc.bookId);
  //     });
  //   });
  // }


  // bookIssueRequest(book){ 
  //   this.router.navigateByUrl("/dashboard/circulation/list/issue/"+book.toString());
  // }

}
