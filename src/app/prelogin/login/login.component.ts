import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApphttpclientService } from 'src/app/apphttpclient.service';
import { Router } from '@angular/router';
import { AuthenticationModel } from 'src/app/AuthenticationModel';
import { AppToastrService } from 'src/app/app-toastr.service';
import { LoaderService } from 'src/app/loader.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  userData : any;
  
  constructor(private loader : LoaderService, private toastr : AppToastrService ,private client : ApphttpclientService, private router : Router, private authModel : AuthenticationModel) { }
  login : any;
  ngOnInit() {
  }

  doLogin(form){
    if(form.valid){
      /*this.client.post('login', {'id':3 , 'username' : form.value.username, 'password' : form.value.password, 'role' : 'user'}).subscribe((user) => {
       console.log("user details "+user[0]);
      });*/
      if(form.value.username == "admin"){
        
        this.loader.loaderStart();
      this.client.get('users/1').subscribe(user => { console.log(user);
        this.authModel.setUserDetails(user);
        this.authModel.setUserRole(user['role']);
        this.loader.loaderEnd();
        this.router.navigateByUrl('dashboard');
      });
    }else {
      this.client.get('users/2').subscribe(user => { console.log(user['role']);
        this.authModel.setUserDetails(user);
        this.authModel.setUserRole(user['role']);
        this.router.navigateByUrl('dashboard');
      });
    }
   
    }
  }

}
