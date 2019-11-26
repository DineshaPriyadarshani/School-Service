import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuBarComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
