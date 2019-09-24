import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const preloginRoutes : Routes =[
    {
        path : '',
        redirectTo : 'login',
        pathMatch : 'full'        
    },
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    }

];

export const preloginModuleRoutes = RouterModule.forChild(preloginRoutes);
