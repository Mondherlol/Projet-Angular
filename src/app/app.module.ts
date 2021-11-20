import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './composants/authentification/login/login.component';
import { SignupComponent } from './composants/authentification/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { FooterComponent } from './composants/accueil/footer/footer.component';
import { TopComponent } from './composants/accueil/top/top.component';
import { CarouselComponent } from './composants//accueil/carousel/carousel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AccueilComponent,
    FooterComponent,
    TopComponent,
    CarouselComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MDBBootstrapModule.forRoot(),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
