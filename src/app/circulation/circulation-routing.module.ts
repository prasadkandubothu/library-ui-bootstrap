import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';

const routes: Routes = [
  {
    path : 'issue',
    component : IssuebookComponent
  }, 
  {
    path : 'return',
    component : ReturnbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CirculationRoutingModule { }
