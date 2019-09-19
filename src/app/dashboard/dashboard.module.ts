import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { dashboardModuleRoutes } from './dashboard.routes';
import { BooksModule } from '../books/books.module';

@NgModule({
  declarations: [DashboardComponent, WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    dashboardModuleRoutes,
    BooksModule
  ]
})
export class DashboardModule { }
