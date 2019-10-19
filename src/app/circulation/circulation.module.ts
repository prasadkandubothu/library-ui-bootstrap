import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { CirculationComponent } from './circulation.component';
import { CirculationRoutingModule } from './circulation-routing.module';
import { CirculationlistComponent } from './circulationlist/circulationlist.component';

@NgModule({
  declarations: [IssuebookComponent, ReturnbookComponent, CirculationComponent, CirculationlistComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CirculationRoutingModule  
  ],
  exports : [IssuebookComponent, ReturnbookComponent, CirculationComponent, CirculationlistComponent]
})
export class CirculationModule { }
