import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './pages/index/user-register/user-register.component';
import { HomeComponent } from './pages/index/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {IndexModule} from './pages/index/index.module';


const applicationRoutes: Routes = [
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
