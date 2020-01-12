import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../pizza/model/pizza";
import {OrderService} from "../../service/order.service";
import {Order} from "../model/order";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  pizzaList: Pizza[];
  order: Order;
  infoMessage;
  totalPrice = 0;
  items: Map<Pizza, number> = new Map();
  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    this.order = this.orderService.order;
    this.pizzaList = this.order.pizzaList;

    if (typeof this.pizzaList === 'undefined') {
      this.router.navigate(['']);
    }
    this.countUniqueItems();
    this.calcTotalPrice();
  }

  addPizzaToOrder() {
    this.countUniqueItems();
  }

  deletePizzaFromOrder(pizza: Pizza) {
    this.order = this.orderService.deletePizzaFromLocalOrder(pizza);
    this.pizzaList = this.order.pizzaList;
    this.calcTotalPrice();
    this.countUniqueItems();
  }

  approveOrder() {
    this.orderService.addOrder(this.order).subscribe(response => {
      this.infoMessage = 'Order accepted. Wait for your delivery';
    },
      error => this.infoMessage = 'Order is failed. => ' + error.error.message);
  }

  calcTotalPrice() {
    this.totalPrice = this.pizzaList.map(pizza => pizza.price)
                                    .reduce((price1, price2) => price1 + price2);
  }

  countUniqueItems() {
    for (let pizza of this.pizzaList) {
      if (this.items.has(pizza)) {
        this.items.set(pizza, this.items.get(pizza) + 1);
      } else {
        this.items.set(pizza, 1);
      }
    }
    this.items.forEach((key, value) => console.log(key + ' ' + value.name));
  }
}
