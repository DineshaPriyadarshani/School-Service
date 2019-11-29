import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      {path: 'user-register', loadChildren: () => import('./user-register/user-register.module').then(m => m.UserRegisterModule)}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
