import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';

import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomepageComponent } from './homepage/homepage.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
// import { AuthGuard } from "../../shared/guard/auth.guard";


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'homepage',         component: HomepageComponent },
    
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    
    { path: 'sign-in', component: SignInComponent },
    { path: 'register-user', component: SignUpComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    
 
   
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
