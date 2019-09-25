import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { CirculationComponent } from './circulation/circulation.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'circulation',
    pathMatch : 'full'
  },
  {
    path : 'issue',
    component : IssuebookComponent
  }, 
  {
    path : 'return',
    component : ReturnbookComponent
  }, 
  {
    path : 'circulation',
    component : CirculationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CirculationRoutingModule { }
