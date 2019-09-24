import { Component, OnInit } from '@angular/core';
import { AppToastrService } from 'src/app/app-toastr.service';
import { TableService } from 'src/app/shared/components/table/table.service';
import { ApphttpclientService } from 'src/app/apphttpclient.service';
import { AuthenticationModel } from 'src/app/AuthenticationModel';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  constructor(private toastr : AppToastrService,private _httpService : ApphttpclientService, private auth :AuthenticationModel,
    private tableService : TableService) { }

    users : any;

  //table component inputs
  actionColumn = false;
  tableHeading : string = "Books Details"
  bookColumns = ["BOOK ID", "BOOK NAME", "AUTHOR NAME", "CATEGORY", "ID", "BOOK STATUS"];
  books : any;
  keys = ["bookId", "bookName", "author","category","id", "bookStatus"];
  searchColumns : string [] = ['bookId', 'bookName'];  
  filterColumns : string [] = ['bookStatus'];

    ngOnInit() {
      this._httpService.get("users").subscribe((res) => {
        this.users = res;
    });
  }

}
