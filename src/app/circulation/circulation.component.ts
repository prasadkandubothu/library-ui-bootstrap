import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from '../AuthenticationModel';

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrls: ['./circulation.component.css']
})
export class CirculationComponent implements OnInit {

  constructor(private auth : AuthenticationModel) { }

  ngOnInit() {
  }

}
