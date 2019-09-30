import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TableService } from './table.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private tableService : TableService) { }

  selectedItem : any;
  @Input()
  actionColumn : boolean = false;
  @Input()
  tableHeading: string = "Sample Table Heading";
  searchText: string = "";
  @Output()
  selectBookEvent = new EventEmitter();
  @Input()
  columns : string[] =[];
  @Input()
  rows : any[] = [];
  @Input()
  keys : any[] = [];

  @Input()
  searchColumns : string [] = [];
  
  @Input()
  isFilterDisplay : boolean = false;

  @Input()
  filterColumns : string [] = [];

  @Input()
  filterOptions : any[] = [];

  @Input()
  isLoaderDisplay : boolean = false;

  filterVal = "";


  ngOnInit() {
    //this.keys = Object.keys(this.rows[0]);
    //this.searchText = this.bookStatusFilter;
  }
  /*filterChange(){
    this.searchText = this.filterVal;
  }*/

  selectedItemDetails(selectedItem){
    this.selectedItem = selectedItem;
    console.log("in table : "+this.selectedItem);
    this.selectBookEvent.emit(this.selectedItem);
  }

  clearSelectedRadioButtons(){

    if(document.querySelectorAll<HTMLInputElement>("input[name=actionRadio]:checked").length > 0)
    {
      document.querySelectorAll<HTMLInputElement>("input[name=actionRadio]:checked")[0].checked = false;
    }
  }
}
