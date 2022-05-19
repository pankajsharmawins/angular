import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CheckPasswordDirective } from './singup/check-password.directive';


@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    LoginComponent,
    HomeComponent,
    PagenotfoundComponent,CheckPasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule, BrowserModule,ToastNoAnimationModule,ToastrModule.forRoot(),HttpClientModule,
  ],
  exports:[],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
