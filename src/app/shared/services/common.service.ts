import { Injectable } from '@angular/core';
import { BookService } from 'src/app/books/book.service';
import { CirculationService } from 'src/app/circulation/circulation.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {   
   }
  private _bookDataBehaviourSubject: BehaviorSubject<any>;
  private _bookDataObservable: Observable<any>;
  private _userDataObservable: Observable<any>;
  private _circulationDataObservable: Observable<any>;


  public get bookDataBehaviourSubject(): BehaviorSubject<any> {
    return this._bookDataBehaviourSubject;
  }
  public set bookDataBehaviourSubject(value: BehaviorSubject<any>) {
    this._bookDataBehaviourSubject = value;
  }

  public get userDataObservable(): Observable<any> {
    return this._userDataObservable;
  }
  public set userDataObservable(value: Observable<any>) {
    this._userDataObservable = value;
  }

  public get circulationDataObservable(): Observable<any> {
    return this._circulationDataObservable;
  }
  public set circulationDataObservable(value: Observable<any>) {
    this._circulationDataObservable = value;
  }

  public get bookDataObservable(): Observable<any> {
    return this._bookDataObservable;
  }

  public set bookDataObservable(value: Observable<any>) {
    this._bookDataObservable = value;
  }



  // setBookDataSubjectObservable(bookSubject : BehaviorSubject<any>){
  //   this.bookDataSubject = bookSubject;
  // }

  // setcirCulationDataSubjectObservable(userSubject : BehaviorSubject<any>){
  //   this.userDataSubject = userSubject;
  // }

  // setUserDataSubjectObservable(circulationSubject : BehaviorSubject<any>){
  //   this.circulationDataSubject = circulationSubject;
  // }


}
