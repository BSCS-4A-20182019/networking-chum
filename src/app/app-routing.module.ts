import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './profile/signup.component';

import { MainResolver } from './main/services/main.resolver';

const appRoutes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'main', component: MainComponent, resolve: { resolver: MainResolver } },
  { path: 'signup', component: SignupComponent},
 
  
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
