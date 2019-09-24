import {RouterModule, Routes} from '@angular/router';
import { BooksdashboardComponent } from './booksdashboard/booksdashboard.component';
import { UsersdashboardComponent } from './usersdashboard/usersdashboard.component';

const dashboardRoutes : Routes =[
    {
        path : '',
        redirectTo : 'books',
        pathMatch : 'full'        
        
    },
    {
        path : 'books',
       component : BooksdashboardComponent
    },
    {
        path : 'users',
       //component : UsersdashboardComponent
       loadChildren : '../users/users.module#UsersModule'
    }

];

export const dashboardModuleRoutes = RouterModule.forChild(dashboardRoutes);
