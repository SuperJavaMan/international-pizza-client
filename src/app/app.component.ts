import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './auth/service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'international-pizza-client';
  username;
  constructor(private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.username = this.tokenStorage.getUserName();
    }
  }
}
