import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from '../app/pages/user-register/user-register.component';


const routes: Routes = [
  { path:'', redirectTo:'userRegister', pathMatch:'full'},
  { path:"userregister", component:UserRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
