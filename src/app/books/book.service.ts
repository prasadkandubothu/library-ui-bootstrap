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
  userCiruclationBooks=[];

  private userDataSubject =  new BehaviorSubject<Book[]>([]);


  constructor(private auth : AuthenticationModel ,private httpClientSerivce: ApphttpclientService, private circulationService : CirculationService) { 
    this.initUserData();
  }

  initUserData(){
    this.getAllBooks();
  }

  getAllBooks(){
    this.httpClientSerivce.get('books').subscribe((res:Book[]) => {
      this.userDataSubject.next(res);
    });
  }

  getUserDataSubjectObservable(){
    return this.userDataSubject.asObservable();
  }


  getCirulationsByUser(){
   return this.circulationService.getCiruclationSubjectObservable();
  }


  bookIssueRequest(book){
    return this.httpClientSerivce.put('books/'+book.id, book);
  }

getUnavalableBooks(){
  return this.userDataSubject.getValue().filter(book => book.bookStatus != 'AVAILABLE');
}

getAlableBooks(){
  return this.userDataSubject.getValue().filter(book => book.bookStatus == 'AVAILABLE');
}

  setUserCiruclationBooks(any){
    return this.userCirculations = any;
  }

  getUserCiruclationBooks(){
    return this.userCirculations;
  }

}
