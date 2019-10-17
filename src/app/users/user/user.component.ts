import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../user.service';
import { Role } from '../role';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationModel } from 'src/app/AuthenticationModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  roles : Role[];
  user : User;//{id : null, firstname : "", lastname : "", password : "", role : "", username : ""};
  userId : string = null;
  btnTitle : string = "Add";

  constructor(private userService : UserService, private router : Router, private activatedRoute : ActivatedRoute, private auth: AuthenticationModel) {   
    if(!this.user){
      console.log("cons...called");
      this.user = new User();
    }

    this.userService.getRolesDataSubjectObservable().subscribe(roles => {
      this.roles = roles;
     });
     this.activatedRoute.paramMap.subscribe(params => {
       this.userId=params.get("id");
     });
     //edit flow
     if(this.userId){
       this.btnTitle = "Update";
      this.userService.getUsersDataSubjectObservable().subscribe(res => {
        this.user = res.filter(u => u.id == parseInt(this.userId))[0];
       });
     }
   }


  ngOnInit() { 
  //  this.userService.getRolesDataSubjectObservable().subscribe(roles => {
  //   this.roles = roles;
  //  });
  //  this.activatedRoute.paramMap.subscribe(params => {
  //    this.userId=params.get("id");
  //  });
  //  //edit flow
  //  if(this.userId){
  //    this.btnTitle = "Update";
  //   this.userService.getUsersDataSubjectObservable().subscribe(res => {
  //     this.user = res.filter(u => u.id == parseInt(this.userId))[0];
  //    });
  //  }
   
  }

  saveUser(userForm){ //alert(userForm.getRaWValue());
    //console.log("uFrom : "+userForm.value.id);
    
    userForm.value.role = this.user.role;
    userForm.value.id = this.user.id;
    userForm.value.username = this.user.username;
    if(this.userId)
       this.userService.editUser(userForm.value, this.userId);
    else
       this.userService.saveUser(userForm.value);
    if(this.auth.getUserRole() == "admin")
      this.router.navigateByUrl("/dashboard/users");
    else
      this.router.navigateByUrl("/dashboard/books");
  }

}
