import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appModuleRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,    
    RouterModule,
    appModuleRoutes,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut : 1000,
      positionClass : 'toast-top-right',
      preventDuplicates : false
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [FormsModule]
})
export class AppModule { }
