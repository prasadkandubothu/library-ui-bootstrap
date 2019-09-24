import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { dashboardModuleRoutes } from './dashboard.routes';
import { BooksModule } from '../books/books.module';
import { BooksdashboardComponent } from './booksdashboard/booksdashboard.component';
import { UsersdashboardComponent } from './usersdashboard/usersdashboard.component';

@NgModule({
  declarations: [DashboardComponent, BooksdashboardComponent, UsersdashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    dashboardModuleRoutes,
    BooksModule    
  ]
})
export class DashboardModule { }
