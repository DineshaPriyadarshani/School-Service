import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  phoneNumber: string;
  password: string;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      phoneNumber: new FormControl({value: ''}),
      password: new FormControl({value: ''})
    });
  }

  onLogin() {
    const user = {
      phoneNumber: this.phoneNumber,
      password: this.password
    };
    this.authService.loginUser(user).subscribe(res => {
      // this.flashMessage.show('Successfully logged in', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['home']).then(e => {
        if (e) {
          localStorage.setItem('phoneNumber', this.phoneNumber);
          console.log(localStorage.getItem('phoneNumber'));
          console.log('Navigation is successful!');
        } else {
          console.log('Navigation has failed!');
        }
      });
    });
  }
}
