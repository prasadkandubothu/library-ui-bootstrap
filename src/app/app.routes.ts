import {RouterModule, Routes} from '@angular/router';
import { AuthgurardService } from './shared/services/authgurard.service';

const appRoutes : Routes =[
    {
        path : '',
        redirectTo : 'prelogin',
        pathMatch : 'full'        
    },
    {
        path : 'prelogin',
        loadChildren : './prelogin/prelogin.module#PreloginModule'
    },
    {
        path : 'dashboard',
        loadChildren : './dashboard/dashboard.module#DashboardModule',
        canActivate : [AuthgurardService]
    }

];

export const appModuleRoutes = RouterModule.forRoot(appRoutes);
