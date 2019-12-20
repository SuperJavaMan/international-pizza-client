import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {TokenStorageService} from '../../service/token-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginForm} from '../../model/login-form';
import {JwtInfo} from '../../model/jwt-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  infoMessage;
  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  login(data) {
    const loginForm: LoginForm = new LoginForm(data.username, data.password);
    this.authService.login(loginForm).subscribe((response: JwtInfo) => {
      console.log(response.accessToken);
      console.log(response.username);
      this.tokenStorage.saveToken(response.accessToken);
      this.tokenStorage.saveUserName(response.username);
      this.tokenStorage.saveAutorities(response.authorities);
      this.infoMessage = 'You login successfully by name -> ' + this.tokenStorage.getUserName()
        + '. Token -> ' + this.tokenStorage.getToken();
    },
      error => this.infoMessage = error.error.message);
  }
}
