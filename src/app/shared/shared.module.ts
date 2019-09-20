import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './components/table/search.pipe';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, TableComponent, SearchPipe],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent, 
    TableComponent
  ]
})
export class SharedModule { }
