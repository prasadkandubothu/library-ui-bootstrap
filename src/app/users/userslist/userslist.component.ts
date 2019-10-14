import { Component, OnInit } from '@angular/core';
import { AppToastrService } from 'src/app/app-toastr.service';
import { TableService } from 'src/app/shared/components/table/table.service';
import { ApphttpclientService } from 'src/app/apphttpclient.service';
import { AuthenticationModel } from 'src/app/AuthenticationModel';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  constructor(private toastr : AppToastrService,private _httpService : ApphttpclientService, private auth :AuthenticationModel,
    private tableService : TableService, private userService : UserService, private router: Router) { }

   

  //table component inputs
  actionColumn = false;
  tableHeading : string = "User Details"
  userColumns = ["USER ID", "USER NAME", "FIRST NAME", "LAST NAME", "ROLE", "EDIT", "DELETE"];
  users : User[];
  keys = ["id", "username", "firstname","lastname","role"];
  searchColumns : string [] = ['id', 'username'];  
  //filterColumns : string [] = ['bookStatus'];
  isLoaderDisplay : boolean = false;
  searchText : string = "" ;

    ngOnInit() {
      this.isLoaderDisplay = true;
     //this.users = this.userService.usersInitData();console.log(this.users);
     this.userService.getUsersDataSubjectObservable().subscribe(res => {
       this.users = res;
     });
     this.isLoaderDisplay = false;
  }

  editUser(user){
    this.router.navigateByUrl("/dashboard/users/list/add/"+user.id);
    //this.userService.editUser(user);
  }

  deleteUser(user){
    this.userService.deleteUser(user);
  }

}
