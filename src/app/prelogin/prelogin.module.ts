import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { PreloginComponent } from './prelogin.component';
import { RouterModule } from '@angular/router';
import { preloginModuleRoutes } from './prelogin.routes';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, PreloginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    preloginModuleRoutes
  ],
  exports : 
  [
    LoginComponent, RegisterComponent
  ]
})
export class PreloginModule { }
