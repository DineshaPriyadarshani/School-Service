import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  phoneNumber: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    const user = {
      phoneNumber: this.phoneNumber,
      password: this.password
    };
    this.authService.loginUser(user).subscribe(res => {
      console.log(res);
    });
  }

}
