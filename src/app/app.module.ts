import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { PreloginModule } from './prelogin/prelogin.module';
import { FormsModule } from '@angular/forms';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    PreloginModule,BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [FormsModule]
})
export class AppModule { }
