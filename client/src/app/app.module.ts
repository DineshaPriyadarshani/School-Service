import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { 
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule 
      } from '@angular/material';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//imoport services
import { LoginService } from './services/login.service';


const appRoutes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    [RouterModule]
  ],
  providers: [
    LoginService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
