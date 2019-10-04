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
  roles : Role[];
  user : User ;

  constructor(private userService : UserService) {
    if(!this.user){
      console.log("cons...called");
      this.user = new User();
    }
   }


  
  ngOnInit() {
   this.roles = this.userService.rolesInitData();
  }

  saveUser(){
    
  }

}
