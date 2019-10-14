import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from 'src/app/apphttpclient.service';
import { Circulation } from '../circulation.modal';
import { CirculationService } from '../circulation.service';
import { AuthenticationModel } from 'src/app/AuthenticationModel';

@Component({
  selector: 'app-circulationlist',
  templateUrl: './circulationlist.component.html',
  styleUrls: ['./circulationlist.component.css']
})
export class CirculationlistComponent implements OnInit {

  circulations : Circulation[] = [];
  //myCirculations : Circulation[] = [];
  ciuculationColumns = ["ID", "BOOK ID", "USER ID"]; 
  adminExtraColumns = ["APPROVE", "DECLINE"];
  userExtraColumns = ["RETURN"];
  searchColumns = ["id"];
  searchText : "";
  totalColumns = 5;

  constructor(private circulationService : CirculationService, private authModel : AuthenticationModel) { 
    console.log("ciculationlist constructor......!");
  }

  ngOnInit() {
    this.getCirculations();
  }

  getCirculations(){
    this.circulationService.getCiruclationSubjectObservable().subscribe((res : Circulation[]) => {
      console.log(this.authModel.getUserDetails());
        if(this.authModel.getUserRole() == "user"){
          this.totalColumns = 4;
          this.circulations = res.filter(c => {
            return c.userId == this.authModel.getUserDetails().id
          });
        }
        else
          this.circulations = res;
        
    })
  }


}
