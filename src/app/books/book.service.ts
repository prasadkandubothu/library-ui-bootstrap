import { Injectable } from '@angular/core';
import { ApphttpclientService } from '../apphttpclient.service';
import { Book } from './book';
import { BehaviorSubject } from 'rxjs';
import { CirculationService } from '../circulation/circulation.service';
import { AuthenticationModel } from '../AuthenticationModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books : Book[] = [];

  userCirculations = [];
  userCiruclationBooks : Book[]= [];

  private bookDataSubject =  new BehaviorSubject<Book[]>([]);

  private userCiruclationBooksSubject =  new BehaviorSubject<Book[]>([]);


  constructor(private auth : AuthenticationModel ,private httpClientSerivce: ApphttpclientService) { 
    this.initUserData();
  }

  initUserData(){
    this.getAllBooks(true);
  }

  getUserCiruclationBooksSuject(){
    return this.userCiruclationBooksSubject;
   }
  getUserCiruclationBooks(){
   return this.userCiruclationBooksSubject.asObservable();
  }

  setUserCiruclationBooks(books : Book[]){
    this.userCiruclationBooksSubject.next(books);
  }

  getAllBooks(flag : boolean){
    if(!this.bookDataSubject.getValue() || flag){
      this.httpClientSerivce.get('books').subscribe((res:Book[]) => {
          this.bookDataSubject.next(res);
          //this.commonService.bookDataBehaviourSubject = this.bookDataSubject;
          //this.commonService.bookDataObservable = this.getUserDataSubjectObservable();
    });
   }
      return this.bookDataSubject.asObservable();
  }


  deleteBook(id){
    this.httpClientSerivce.delete('books/'+id).subscribe(res => {
      console.log("book deleted "+ res);
      this.getAllBooks(true);
    });
  }

  // getUserDataSubjectObservable(){
  //   return this.bookDataSubject.asObservable();
  // }

  updateBooksDataInSubject(books : Book[]){
    this.bookDataSubject.next(books);
  }

  getBooksBehavourSubject(){
    return this.bookDataSubject;
  }

  // getCirulationsData(){
  //  return this.circulationService.getCiruclationSubjectObservable();
  //  //return this.commonService.circulationDataObservable;
  // }


  bookIssueRequest(book){
    return this.httpClientSerivce.put('books/'+book.id, book);
  }

  updateBookObservable(book){
    return this.httpClientSerivce.put('books/'+book.id, book);
  }
/*
 getUnavalableBooks(){
   let books : Book[] = [];
   if(this.bookDataSubject.getValue().length == 0){
     this.getAllBooks(true);
   } 
  //return this.bookDataSubject.getValue().filter(book => book.bookStatus != 'AVAILABLE');
  return this.bookDataSubject.pipe
 }

 getAlableBooks(){
  if(this.bookDataSubject.getValue().length == 0){
    this.getAllBooks(true);
  }
  return this.bookDataSubject.getValue().filter(book => book.bookStatus == 'AVAILABLE');
 }*/

  // setUserCiruclationBooks(books : Book[]){
  //   return this.userCiruclationBooks = books;
  // }

  // getUserCiruclationBooks(){
  //   return this.userCiruclationBooks;
  // }

}
