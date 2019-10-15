import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationModel } from 'src/app/AuthenticationModel';

@Injectable({
  providedIn: 'root'
})
export class AuthgurardService implements CanActivate {
 

  constructor(private auth : AuthenticationModel, private router: Router) { }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.auth.getUserDetails() == null)
    {
      this.router.navigateByUrl("prelogin/login")
      return false;
    }
    return true;
  }
}
