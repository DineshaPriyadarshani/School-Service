import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: Http) { }

  getUsers() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://school-service.free.beeceptor.com/users', { headers }).pipe(map(res => res.json()));
  }

}
