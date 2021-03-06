import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserRegisterComponent} from './user-register.component';
import {UserRegisterRoutingModule} from './user-register-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [UserRegisterComponent],
  imports: [
    CommonModule,
    UserRegisterRoutingModule,
      FormsModule
  ]
})
export class UserRegisterModule { }
