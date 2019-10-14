import { Injectable, OnInit } from '@angular/core';
import { Circulation } from './circulation.modal';
import { BehaviorSubject } from 'rxjs';
import { ApphttpclientService } from '../apphttpclient.service';


@Injectable({
  providedIn: 'root'
})
export class CirculationService{

  
  circulationData : Circulation [] = [];

  private circulationSubject = new BehaviorSubject<Circulation[]>([]);

  
  constructor(private httpClientService : ApphttpclientService) {

    console.log("from service cons");
    this.initCirculationData();
   }

 
  initCirculationData(){
    this.httpClientService.get("circulation").subscribe((res : Circulation[]) => {
        this.circulationSubject.next(res);
        console.log("in service  : "+this.circulationSubject.getValue());
    })
  }

  getCiruclationSubjectObservable(){
    return this.circulationSubject.asObservable();
  }

  createCirculationRequest(userId, book, returnDate){
   let cc= new Circulation();
   cc.bookId = book.id;
   cc.returnDate = returnDate;
   cc.issueDate = "";//new Date().toLocaleDateString("en-US");//.replace("/", "-");
   cc.userId = userId;
  return this.httpClientService.post('circulation', cc);
  }

}
