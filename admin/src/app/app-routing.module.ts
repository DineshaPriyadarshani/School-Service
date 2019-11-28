import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {UserRegisterComponent} from './pages/index/user-register/user-register.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path: 'login', component: LoginComponent},
  // {path: 'user-register', component: UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
