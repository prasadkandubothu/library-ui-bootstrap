import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { CirculationComponent } from './circulation/circulation.component';

@NgModule({
  declarations: [IssuebookComponent, ReturnbookComponent, CirculationComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports : [IssuebookComponent, ReturnbookComponent, CirculationComponent]
})
export class BooksModule { }
