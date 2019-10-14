import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { CirculationComponent } from './circulation.component';
import { CirculationlistComponent } from './circulationlist/circulationlist.component';

const circulationRoutes: Routes = [
  {
    path : '',
    redirectTo : 'list',
    pathMatch : 'full'
  },
 
  {
    path : 'list',
    component : CirculationComponent,
    children : [
      {
          path : '',
          component : CirculationlistComponent
      },
      {
        path : 'issue',
        component : IssuebookComponent
      },
      {
        path : 'issue/:book',
        component : IssuebookComponent
      }
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(circulationRoutes)],
  exports: [RouterModule]
})
export class CirculationRoutingModule { }
