import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginForm} from '../model/login-form';
import {RegForm} from '../model/reg-form';

const URL = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm) {
    return this.http.post(URL + 'login', loginForm, httpOptions);
  }

  reg(regForm: RegForm) {
    return this.http.post(URL + 'reg', regForm, httpOptions);
  }
}
