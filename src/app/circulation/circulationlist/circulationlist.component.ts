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

  inProgressCirculations : Circulation[] = [];
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
    //this.circulationService.initCirculationData();
    // this.circulationService.getCiruclationSubjectObservable().subscribe(res => {

    // });
  }

  getCirculations(){
    this.circulationService.getCiruclationSubjectObservable().subscribe((res : Circulation[]) => {
      // console.log("here : "+res);
      // console.log(this.authModel.getUserDetails());
      //   if(this.authModel.getUserRole() == "user"){
      //     this.totalColumns = 4;
      //     this.circulations = res.filter(c => {
      //       return c.userId == this.authModel.getUserDetails().id
      //     });
      //   }
      //   else
      console.log("*** :"+res);
          this.inProgressCirculations = res.filter(c => c.status == "INPROGRESS")        
    })
  }

  approveCirculation(circulation){
    this.circulationService.approverOrDeclineCiruclation(circulation, "ISSUED");
    //this.circulationService.getCiruclationSubjectObservable().subscribe(res => this.circulations = res);
    //this.circulationService.getAllCirculations();

  }

  declineCirculation(circulation){
    this.circulationService.approverOrDeclineCiruclation(circulation, "AVAILABLE");
  }


}
