import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './auth/service/token-storage.service';
import {ExchangeService} from "./service/exchange.service";
import {OrderService} from "./service/order.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'international-pizza-client';
  username;
  itemCount = 0;
  constructor(private tokenStorage: TokenStorageService,
              private orderService: OrderService) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.username = this.tokenStorage.getUserName();
    }
    this.orderService.orderStatus.subscribe(order => {
      const orderLength = order.pizzaList.length;
      if (orderLength >= 0) this.itemCount = orderLength;
    })
  }
}
