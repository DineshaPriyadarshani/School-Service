import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from './pages/index/user-register/user-register.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: IndexComponent},
  { path: 'user-register', component: UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
