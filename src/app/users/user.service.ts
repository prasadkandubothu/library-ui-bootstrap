import { Injectable } from '@angular/core';
import { ApphttpclientService } from '../apphttpclient.service';
import { User } from './user';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService : ApphttpclientService) { }

  users : User [] = [];
  roles : Role [] = [];
  //

  usersInitData(){
    console.log("users length : "+this.users.length);
    if(this.users.length == 0){ console.log("no users in array");
      this.getAllUsers();
      console.log("users ::: "+this.users);
    }
    else{
      console.log("no users in array else condition");
    }
    return this.users;
  }

  rolesInitData(){
    if(this.roles.length ==0){
      this.getAllRoles();
    }
    return this.roles;
  }

  getAllUsers() {
    this.httpClientService.get('users').subscribe((res : User[]) => { console.log("response : "+res)
      this.users = res;
    });
  }


  getAllRoles(){
    this.httpClientService.get('roles').subscribe((res : Role[]) => {
      this.roles = res;
    });
    return this.users;
  }

}
