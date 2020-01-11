import {Customer} from "./customer";
import {Pizza} from "../../pizza/model/pizza";

export class Order {
  id: number;
  customer: Customer;
  address: string;
  pizzaList: Pizza[] = [];

}
