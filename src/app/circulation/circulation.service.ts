import { Injectable, OnInit } from '@angular/core';
import { Circulation } from './circulation.modal';
import { BehaviorSubject } from 'rxjs';
import { ApphttpclientService } from '../apphttpclient.service';
import { BookService } from '../books/book.service';
import { CommonService } from '../shared/services/common.service';
import { Book } from '../books/book';


@Injectable({
  providedIn: 'root'
})
export class CirculationService{

  
  inPorgressCirculationData : Circulation [] = [];
  allCirculationData : Circulation [] = [];
  books = [];

  private circulationSubject = new BehaviorSubject<Circulation[]>([]);

  
  constructor(private httpClientService : ApphttpclientService, private commonService : CommonService) {

    console.log("from service cons");
    this.initCirculationData();
   }

 
  initCirculationData(){
    
  this.getAllInprogressCirculations();
  }

setCirculation(circulation){
  let cArray=this.circulationSubject.getValue();
  cArray.push(circulation);
  this.circulationSubject.next(cArray);
}
  getAllInprogressCirculations(){
    this.httpClientService.get("circulation").subscribe((res : Circulation[]) => {
      this.circulationSubject.next(res);
      // this.inPorgressCirculationData =res.filter(c => c.status == "INPROGRESS");
      // console.log("cs : "+this.inPorgressCirculationData);     
      // console.log("in service  : "+this.circulationSubject.getValue());     
      this.commonService.circulationDataObservable = this.circulationSubject.asObservable(); 
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

  approverOrDeclineCiruclation(circulation, circulationBookStatus){
    
    this.httpClientService.get("books").subscribe((res : Book[]) => {
      this.books = res.filter(book => book.bookStatus != 'AVAILABLE');
      let book : Book = this.books.find(book => book.id == circulation.bookId);
      book.bookStatus = circulationBookStatus;
      this.httpClientService.put('books/'+book.id, book).subscribe(res => {

        if(circulationBookStatus == "AVAILABLE")
          this.httpClientService.delete('circulation/'+circulation.id).subscribe(res => { console.log("circulation deleted");
          
          this.getAllInprogressCirculations();
           });
        else {
          circulation.status = "DONE";
        this.httpClientService.put('circulation/'+circulation.id, circulation).subscribe(res => { 
          console.log("circulation book issued");
          this.getAllInprogressCirculations(); 
          this.httpClientService.get('books').subscribe((res : Book[]) => {
            this.commonService.bookDataBehaviourSubject.next(res);
          });
        });
        }
      })
     
    })
    //return this.httpClientService.delete('circulation/'+circulation.id);

  }

}
