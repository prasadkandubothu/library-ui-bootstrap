import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from '../AuthenticationModel';

@Component({
  selector: 'app-usersmain',
  templateUrl: './usersmain.component.html',
  styleUrls: ['./usersmain.component.css']
})
export class UsersmainComponent implements OnInit {

  constructor(private auth : AuthenticationModel) { }

  ngOnInit() {
  }

}
