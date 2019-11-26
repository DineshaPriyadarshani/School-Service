import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';

const applicationRoutes:Routes = [
  { path: 'dashboard', component: HomeComponent},
  { path: 'register' , component: UserRegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuBarComponent,
    UserRegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
