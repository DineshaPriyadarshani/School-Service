import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private name: string;
  private address: string;
  private phoneNumber: string;
  private occupation: string;
  private contactNumber: string;
  constructor(private apiService: ApiService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
      const id = localStorage.getItem('phoneNumber');
      this.apiService.getUsers().subscribe(data => {
          console.log(data);
          this.name = data.name;
          this.address = data.address;
          this.phoneNumber = data.phoneNumber;
          this.occupation = data.occupation;
          this.contactNumber = this.contactNumber;

      });
  }

}
