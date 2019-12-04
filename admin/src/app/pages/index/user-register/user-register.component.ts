import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
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

  constructor(private userService: UserService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    console.log('userRgister');
  }
  OnSubmit() {

    const user = {
      stdId : this.stdId,
      phoneNumber : this.phoneNumber,
      password : 'abc@123',
      isCompleted: false
    };
    this.userService.registerUser(user).subscribe(res => {
      if (res.state) {
        this.flashMessage.show('Successfully registered', { cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000});
      }
    } );
  }

}
