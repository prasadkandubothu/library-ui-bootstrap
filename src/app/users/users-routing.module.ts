import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserslistComponent } from './userslist/userslist.component';
import { UsersmainComponent } from './usersmain.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path : '',
    redirectTo : 'list',
    pathMatch : 'full'
  },
  {
    path : 'list',
    component : UsersmainComponent,
    children : [
      {
        path : '',
        component : UserslistComponent
      },
      {
        path : 'add', 
        component : UserComponent
      },
      {
        path : 'add/:id', 
        component : UserComponent
      }
    ]
  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
