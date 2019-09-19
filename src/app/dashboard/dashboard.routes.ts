import {RouterModule, Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const dashboardRoutes : Routes =[
    {
        path : '',
       component :WelcomeComponent   
    },
    {
        path : 'welcome',
       component : WelcomeComponent
    }

];

export const dashboardModuleRoutes = RouterModule.forChild(dashboardRoutes);
