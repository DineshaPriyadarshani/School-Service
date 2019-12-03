import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  providers: [UserService]
})
export class UserRegisterComponent implements OnInit {
  stdId: string;
  phoneNumber: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('userRgister');
  }
  OnSubmit() {

    const user = {
      stdId : this.stdId,
      phoneNumber : this.phoneNumber,
      password : 'abc@123'
    };
    this.userService.registerUser(user).subscribe(res => {
      console.log(res);
    } );
  }

}
