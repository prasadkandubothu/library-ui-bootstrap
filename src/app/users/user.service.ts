import { Injectable } from '@angular/core';
import { ApphttpclientService } from '../apphttpclient.service';
import { User } from './user';
import { Role } from './role';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  users : User [] = [];
  roles : Role [] = [];


  //usersData : User [] = [];

  private usersDataSubject = new BehaviorSubject<User[]>([]);
  private rolesDataSubject = new BehaviorSubject<Role[]>([]);

  constructor(private httpClientService : ApphttpclientService) { 
    this.initUsersData();
    this.initRolesData();

  }

  //

  initUsersData(){
    
    this.getAllUsers();
  }

  initRolesData(){
    this.getAllRoles();
  }

  getUsersDataSubjectObservable(){
    return this.usersDataSubject.asObservable();
  }

  getRolesDataSubjectObservable(){
    return this.rolesDataSubject.asObservable();
  }

  rolesInitData(){
    if(this.roles.length ==0){
      this.getAllRoles();
    }
    return this.roles;
  }

  getAllUsers() {
    this.httpClientService.get('users').subscribe((res : User[]) => { console.log("response : "+res)    
    this.usersDataSubject.next(res);
    });
  }


  getAllRoles(){
    this.httpClientService.get('roles').subscribe((res : Role[]) => {
      this.rolesDataSubject.next(res);
    });
  }


  saveUser(user : User){
    this.httpClientService.post('users', user).subscribe(res => {
      console.log("user saved successfully");
      this.getAllUsers();
    })
  }

  editUser(user : User, userId : string){ 
    this.httpClientService.put('users/'+userId, user).subscribe(res => {
      console.log("user edit saved successfully");
      this.getAllUsers();
    });
  }

  deleteUser(user : User){
    this.httpClientService.delete('users/'+user.id).subscribe(res => {
      console.log("user deleted successfully");
      this.getAllUsers();
    })
  }




}
