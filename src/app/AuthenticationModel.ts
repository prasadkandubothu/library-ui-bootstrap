import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export class AuthenticationModel {
    
    private user:any;
    private role : any ="admin";

    constructor(private router : Router){}

    setUserDetails(user:any){
        this.user = user;
    }

    getUserDetails(){
        return this.user;
    }

    setUserRole(role:any){
        this.role = role;
    }

    getUserRole(){
        return this.role;
    }

    doLogout(){
        this.user = null;
        this.role = null;
        this.router.navigateByUrl('prelogin');
    }

}