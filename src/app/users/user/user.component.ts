import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Role } from '../role';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService : UserService) { }

  roles : Role[];
  user : User ;
  
  ngOnInit() {
   this.roles = this.userService.rolesInitData();
  }

  saveUser(){
    
  }

}
