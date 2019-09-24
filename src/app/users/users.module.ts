import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { UserslistComponent } from './userslist/userslist.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserComponent, UserslistComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ],
  exports:[UserslistComponent]
})
export class UsersModule { }
