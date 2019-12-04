import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor(private http: Http) { }
  loggedIn() {
    return tokenNotExpired();
  }
  loginUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/login', user, { headers }).pipe(map(res => res.json()));
  }
}
