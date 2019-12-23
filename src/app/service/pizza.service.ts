import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pizza} from '../pizza/model/pizza';

const URL = 'http://localhost:8080/api/pizza/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  getPizzaList() {
    return this.http.get(URL + 'all');
  }

  getPizzaById(id: number) {
    return this.http.get(URL + id);
  }

  addPizza(pizza: Pizza) {
    const formData: FormData = new FormData();
    formData.append('id', String(pizza.id));
    formData.append('name', pizza.name);
    formData.append('size', pizza.size);
    formData.append('price', String(pizza.price));
    formData.append('icon', pizza.icon);
    return this.http.post(URL, formData);
  }

  updatePizza(pizza: Pizza) {
    const formData: FormData = new FormData();
    formData.append('id', String(pizza.id));
    formData.append('name', pizza.name);
    formData.append('size', pizza.size);
    formData.append('price', String(pizza.price));
    formData.append('icon', pizza.icon);
    return this.http.put(URL + pizza.id, formData);
  }

  deletePizza(id: number) {
    this.http.delete(URL + id);
  }
}
