import {RouterModule, Routes} from '@angular/router';

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
        loadChildren : './dashboard/dashboard.module#DashboardModule'
    }

];

export const appModuleRoutes = RouterModule.forRoot(appRoutes);
