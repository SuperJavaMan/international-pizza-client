import {EventEmitter, Injectable} from '@angular/core';
import {Order} from "../order/model/order";
import {HttpClient} from "@angular/common/http";
import {Pizza} from "../pizza/model/pizza";

const URL_ORDER = 'http://localhost:8080/api/order/';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order;
  orderStatus: EventEmitter<Order> = new EventEmitter<Order>();

  constructor(private http: HttpClient) {
  }

  initOrder() {
    this.order = new Order();
    this.order.customer = null;
    this.order.pizzaList = [];
  }

  addPizzaToLocalOrder(pizza: Pizza) {
    if (typeof this.order === 'undefined') this.initOrder();
    this.order.pizzaList.push(pizza);
    this.orderStatus.emit(this.order);
    return this.order;
  }

  deletePizzaFromLocalOrder(pizza: Pizza) {
    const index = this.order.pizzaList.indexOf(pizza);
    // console.log('Service delete. Index = ' + index);
    if (index >= 0) {
      console.log('Service delete. Index = ' + index);
      this.order.pizzaList.splice(index, 1);
      this.orderStatus.emit(this.order);
      this.order.pizzaList.forEach(item => console.log(item.name));
    }
    return this.order;
  }

  getGlobalOrderList() {
    return this.http.get(URL_ORDER + 'all');
  }

  getOrderById(id: number) {
    return this.http.get(URL_ORDER + id);
  }

  getCustomerOrderList() {
    return this.http.get(URL_ORDER);
  }

  addOrder(order: Order) {
    return this.http.post(URL_ORDER, order);
  }

  addPizzaToOrder(order_id: number, pizza_id: number) {
    return this.http.put(URL_ORDER + 'addPizzaToOrder/' + order_id + '/' + pizza_id, null);
  }

  updateOrder(id: number, order: Order) {
    return this.http.put(URL_ORDER + id, order);
  }

  deleteOrder(id: number) {
    return this.http.delete(URL_ORDER + id);
  }
}
