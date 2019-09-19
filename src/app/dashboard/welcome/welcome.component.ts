import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from 'src/app/AuthenticationModel';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private auth : AuthenticationModel) { }

  ngOnInit() {
  }

}
