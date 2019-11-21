import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  getloginpage(){
    return this.http.get(environment.appUrl+"/auth/login",{
        observe:'body',
        withCredentials:true,
        headers:new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded')
      });
  }

  login(data) {
    return this.http.post(environment.appUrl+"/auth/password", data, {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded')
    })
  }

  logout(){
    return this.http.get(environment.appUrl+"/auth/logout",{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded')
    });
  }


}
