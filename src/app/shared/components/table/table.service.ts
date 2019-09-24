import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {


  private tableSubject = new BehaviorSubject("");
  tableObservable = this.tableSubject.asObservable();

  constructor() { }

  updateTableObservableValue(value){
    this.tableSubject.next(value);
  }


}
