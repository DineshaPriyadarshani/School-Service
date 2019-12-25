import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.apiService.getUsers()
        .subscribe(
            data => {
              this.users = data;
              console.log(this.users);
            },
            error => {
              console.log('Error');
            }
        );
  }

}
