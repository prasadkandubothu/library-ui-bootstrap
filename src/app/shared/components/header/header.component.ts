import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from 'src/app/AuthenticationModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  constructor(private auth : AuthenticationModel) { }

  ngOnInit() {
  }
 
  logOut(){
    this.auth.doLogout();
  }

}
