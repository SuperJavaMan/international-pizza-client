import { Injectable } from '@angular/core';
import {Order} from "../order/model/order";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../order/model/customer";

const URL_CUSTOMER = 'http://localhost:8080/api/customer/carent';
const URL_ORDER = 'http://localhost:8080/api/order/';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order;
  customer: Customer =
    {id: null,
    name: 'Oleg',
    cardNumber: '123456789',
    orderList: []};
  constructor(private http: HttpClient) {
    this.order.customer = this.customer;
  }

  getOrderList() {
    return this.http.get(URL_ORDER + 'all');
  }

  getOrderById(id: number) {
    return this.http.get(URL_ORDER + id);
  }

  getCustomerOrderList
}
