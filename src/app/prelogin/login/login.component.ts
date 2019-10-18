import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApphttpclientService } from 'src/app/apphttpclient.service';
import { Router } from '@angular/router';
import { AuthenticationModel } from 'src/app/AuthenticationModel';
import { AppToastrService } from 'src/app/app-toastr.service';
import { LoaderService } from 'src/app/loader.service';
import { UserService } from 'src/app/users/user.service';
import { User } from 'src/app/users/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  userData : any;
  users : User [] = [];
  loggedInUser : User ;
  
  constructor(private userService : UserService ,private loader : LoaderService, private toastr : AppToastrService ,private client : ApphttpclientService, private router : Router, private authModel : AuthenticationModel) { }
  login : any;
  ngOnInit() {
    this.userService.getUsersDataSubjectObservable().subscribe(res => {
      this.users = res;
    });
  }

  doLogin(form){
    if(form.valid){
     

      this.loggedInUser=this.users.find(user => user.username === form.value.username);
      if(!this.loggedInUser){
        this.toastr.error(form.value.username + "user does not exist..!");
        return false;
      }

      if(form.value.username == this.loggedInUser.username && form.value.password == this.loggedInUser.password){
        
        this.loader.loaderStart();
        this.authModel.setUserDetails(this.loggedInUser);
        this.authModel.setUserRole(this.loggedInUser.role);
        this.loader.loaderEnd();
        this.router.navigateByUrl('dashboard');
   
     }else 
     { this.toastr.error("Invalid Credentials, Please try again");
   
    }
  }
   
    }
  }


