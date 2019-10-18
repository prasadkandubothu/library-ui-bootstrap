import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/user';
import { UserService } from 'src/app/users/user.service';
import { Router } from '@angular/router';
import { AppToastrService } from 'src/app/app-toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService, private router : Router, private toastr : AppToastrService) { }

  user  : User;

  ngOnInit() {
    this.user =  new User();
  }

  registerUser(form){
      this.user = form.value;
      this.user.role = "user";
      this.userService.saveUser(form.value);
      this.router.navigateByUrl("/prelogin")

  }

}
