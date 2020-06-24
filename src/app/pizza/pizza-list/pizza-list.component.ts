import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../../service/pizza.service';
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  pizzaList;
  infoMessage;
  isResponseOk;
  constructor(private pizzaService: PizzaService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.pizzaService.getPizzaList().subscribe(list => {
      this.isResponseOk = true;
      this.pizzaList = list;
    },
      error => {
        this.isResponseOk = false;
        this.infoMessage = error.error.message;
      });
  }

  addPizzaToOrder(pizza) {
    this.orderService.addPizzaToLocalOrder(pizza);
  }
}
