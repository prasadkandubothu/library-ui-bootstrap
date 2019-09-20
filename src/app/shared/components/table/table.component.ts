import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  tableHeading : string = "Books Details";
  searchText: string = "";
  columns : string[] = ["BOOK ID", "BOOK NAME", "AUTHOR NAME", "CATEGORY", "ID"];
  rows : any[] = [{"bookId": "1",
      "bookName": "Java by James",
      "author": "James",
      "category": "coding",
      "id": 1
    },
    {
      "id": 2,
      "bookId": "2",
      "bookName": "Wndiows by Gates",
      "author": "Gates",
      "publications": "Vikram Publications",
      "category": "coding"
    },
    {
      "id": 3,
      "bookId": "3",
      "bookName": "C by Dennies",
      "author": "Dennies",
      "publications": "Vikram Publications",
      "category": "coding"
    },
    {
      "id": 4,
      "bookId": "4",
      "bookName": "CPU by Charles",
      "author": "Charles",
      "publications": "Vikram Publications",
      "category": "coding"
    }
  ]
  keys : any[];


  ngOnInit() {
    this.keys = Object.keys(this.rows[0]);
  }

}
