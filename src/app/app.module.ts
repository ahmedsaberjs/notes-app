import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';import { ProfileComponent } from './component/profile/profile.component';import { SigninComponent as SigningComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'@NgModule({
  declarations: [
 AppComponent,
 NavbarComponent,
 NotFoundComponent,
 ProfileComponent,
 SigningComponent,
 SignupComponent
  ],
  imports: [
 BrowserModule,
 AppRoutingModule,
 ReactiveFormsModule,
 HttpClientModule
 
  ],  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
