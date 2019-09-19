import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appModuleRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,    
    RouterModule,
    appModuleRoutes
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [FormsModule]
})
export class AppModule { }
