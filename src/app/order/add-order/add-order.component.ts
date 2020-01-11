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
  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    this.order = this.orderService.order;
    this.pizzaList = this.order.pizzaList;

    if (typeof this.pizzaList === 'undefined') {
      this.router.navigate(['']);
    }
    this.calcTotalPrice();
  }

  addPizzaToOrder() {

  }
  deletePizzaFromOrder(pizza: Pizza) {
    console.log('Delete pizza method works. Items = ' + this.pizzaList.length);
    this.order = this.orderService.deletePizzaFromLocalOrder(pizza);
    this.pizzaList = this.order.pizzaList;
    console.log('Delete pizza method after delete. Items = ' + this.pizzaList.length);
    this.calcTotalPrice();
  }

  approveOrder() {
    this.orderService.addOrder(this.order).subscribe(response => {
      this.infoMessage = 'Order accepted. Wait for your delivery';
    },
      error => this.infoMessage = 'Order is failed. => ' + error.error.message);
  }

  calcTotalPrice() {
    this.pizzaList.map(pizza => this.totalPrice + pizza.price);
  }
}
