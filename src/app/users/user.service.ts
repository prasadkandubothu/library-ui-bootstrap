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

  usersInitData(){
    if(this.users.length ==0){
      this.getAllUsers();
    }
    return this.users;
  }

  rolesInitData(){
    if(this.roles.length ==0){
      this.getAllRoles();
    }
    return this.roles;
  }

  getAllUsers() : User[]{
    this.httpClientService.get('users').subscribe((res : User[]) => {
      this.users = res;
    });
  return this.users;
  }


  getAllRoles(){
    this.httpClientService.get('roles').subscribe((res : Role[]) => {
      this.roles = res;
    });
    return this.users;
  }

}
