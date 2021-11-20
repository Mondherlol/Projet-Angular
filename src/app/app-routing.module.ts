import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./composants/authentification/login/login.component";
import {SignupComponent } from './composants/authentification/signup/signup.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ErrorComponent } from './composants/error/error.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'accueil', component: AccueilComponent },
  // { path: '', component: AccueilComponent },
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', component:ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

