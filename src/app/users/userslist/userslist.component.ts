import { Component, OnInit } from '@angular/core';
import { AppToastrService } from 'src/app/app-toastr.service';
import { TableService } from 'src/app/shared/components/table/table.service';
import { ApphttpclientService } from 'src/app/apphttpclient.service';
import { AuthenticationModel } from 'src/app/AuthenticationModel';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  constructor(private toastr : AppToastrService,private _httpService : ApphttpclientService, private auth :AuthenticationModel,
    private tableService : TableService, private userService : UserService) { }

   

  //table component inputs
  actionColumn = false;
  tableHeading : string = "User Details"
  userColumns = ["USER ID", "USER NAME", "FIRST NAME", "LAST NAME", "ROLE"];
  users : User[];
  keys = ["id", "username", "firstname","lastname","role"];
  searchColumns : string [] = ['id', 'username'];  
  //filterColumns : string [] = ['bookStatus'];
  isLoaderDisplay : boolean = false;

    ngOnInit() {
      this.isLoaderDisplay = true;
     this.users = this.userService.getUsersInitData();console.log(this.users);
     this.isLoaderDisplay = false;
  }

  

}
