import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { UserslistComponent } from './userslist/userslist.component';
import { SharedModule } from '../shared/shared.module';
import { UsersmainComponent } from './usersmain.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, UserslistComponent, UsersmainComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,FormsModule
  ],
  exports:[UsersmainComponent]
})
export class UsersModule { }
