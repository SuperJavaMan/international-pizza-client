import {Order} from "./order";

export class Customer {
  id: number;
  name: string;
  cardNumber: string;
  orderList: Order[] = [];
}
