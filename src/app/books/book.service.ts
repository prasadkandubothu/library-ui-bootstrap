import { Injectable } from '@angular/core';
import { ApphttpclientService } from '../apphttpclient.service';
import { Book } from './book';
import { BehaviorSubject } from 'rxjs';
import { CirculationService } from '../circulation/circulation.service';
import { AuthenticationModel } from '../AuthenticationModel';
import { CommonService } from '../shared/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books : Book[] = [];

  userCirculations = [];
  userCiruclationBooks=[];

  private bookDataSubject =  new BehaviorSubject<Book[]>([]);


  constructor(private auth : AuthenticationModel ,private httpClientSerivce: ApphttpclientService,private commonService : CommonService, private circulationService : CirculationService) { 
    this.initUserData();
  }

  initUserData(){
    this.getAllBooks();
  }

  getAllBooks(){
    this.httpClientSerivce.get('books').subscribe((res:Book[]) => {
      this.bookDataSubject.next(res);
      this.commonService.bookDataBehaviourSubject = this.bookDataSubject;
      this.commonService.bookDataObservable = this.getUserDataSubjectObservable();
    });
  }

  getUserDataSubjectObservable(){
    return this.bookDataSubject.asObservable();
  }

  updateBooksDataInSubject(books : Book[]){
    this.bookDataSubject.next(books);
  }

  getBooksBehavourSubject(){
    return this.bookDataSubject;
  }

  getCirulationsData(){
   return this.circulationService.getCiruclationSubjectObservable();
   //return this.commonService.circulationDataObservable;
  }


  bookIssueRequest(book){
    return this.httpClientSerivce.put('books/'+book.id, book);
  }

 getUnavalableBooks(){
   if(this.bookDataSubject.getValue().length == 0){
     this.getAllBooks();
   } 
  return this.bookDataSubject.getValue().filter(book => book.bookStatus != 'AVAILABLE');
 }

 getAlableBooks(){
  if(this.bookDataSubject.getValue().length == 0){
    this.getAllBooks();
  }
  return this.bookDataSubject.getValue().filter(book => book.bookStatus == 'AVAILABLE');
 }

  setUserCiruclationBooks(any){
    return this.userCirculations = any;
  }

  getUserCiruclationBooks(){
    return this.userCirculations;
  }

}
