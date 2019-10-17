import { Injectable, OnInit } from '@angular/core';
import { Circulation } from './circulation.modal';
import { BehaviorSubject } from 'rxjs';
import { ApphttpclientService } from '../apphttpclient.service';
import { Book } from '../books/book';


@Injectable({
  providedIn: 'root'
})
export class CirculationService{

  
  inPorgressCirculationData : Circulation [] = [];
  allCirculationData : Circulation [] = [];
  books = [];

  private circulationSubject = new BehaviorSubject<Circulation[]>([]);

  
  constructor(private httpClientService : ApphttpclientService) {
    this.initCirculationData();
   }

  //Init ciruclation data
  initCirculationData(){
    this.getAllCirculations(true);
  }

  setCirculation(circulation){
    let cArray=this.circulationSubject.getValue();
    cArray.push(circulation);
    this.circulationSubject.next(cArray);
  }

  //Load the data from server or subject
  getAllCirculations(flag : boolean){
      if(!this.circulationSubject.getValue() || flag){
          this.httpClientService.get("circulation").subscribe((res : Circulation[]) => {
            this.circulationSubject.next(res);         
        });
      }
    return this.circulationSubject.asObservable();
  }

  //create/insert circulation object
  createCirculation(userId, book, returnDate){
      let cc= new Circulation();
      cc.bookId = book.id;
      cc.returnDate = returnDate;
      cc.issueDate = "";//new Date().toLocaleDateString("en-US");//.replace("/", "-");
      cc.userId = userId;
      return this.httpClientService.post('circulation', cc);
  }

  //approver or decline ciruclation
  approverOrDeclineCiruclation(circulation, circulationBookStatus , allBooks : Book[]){
      this.books = allBooks.filter(book => book.bookStatus != 'AVAILABLE');
      let book : Book = this.books.find(book => book.id == circulation.bookId);
      book.bookStatus = circulationBookStatus;
      this.httpClientService.put('books/'+book.id, book).subscribe(res => {
            if(circulationBookStatus == "AVAILABLE")
              this.deleteCirculation(circulation.id);
            else {
              circulation.status = "DONE";
            this.updateCirculation(circulation);
            }
          });
  }

    private updateCirculation(circulation: any) {
      this.httpClientService.put('circulation/' + circulation.id, circulation).subscribe(res => {
        console.log("circulation book issued");
        this.getAllCirculations(true);
      });
    }

    private deleteCirculation(id: any) {
      this.httpClientService.delete('circulation/' + id).subscribe(res => {
        console.log("circulation deleted");
        this.getAllCirculations(true);
      });
    }
}
