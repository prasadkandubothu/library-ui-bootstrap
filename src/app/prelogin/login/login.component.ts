import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApphttpclientService } from 'src/app/apphttpclient.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  userData : any;
  constructor(private client : ApphttpclientService) { }
  login : any;
  ngOnInit() {
  }

  doLogin(form){
    if(form.valid){
      this.client.post('login', {'id':3 , 'username' : form.value.username, 'password' : form.value.password, 'role' : 'user'}).subscribe((user) => {
       console.log(user[0]);

      });
    }
  }

}
