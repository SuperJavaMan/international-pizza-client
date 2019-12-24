import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PizzaDTO} from '../pizza/model/pizzaDTO';

const URL = 'http://localhost:8080/api/pizza/';

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

  addPizza(pizza: PizzaDTO) {
    const formData: FormData = new FormData();
    formData.append('id', String(pizza.id));
    formData.append('name', pizza.name);
    formData.append('size', pizza.size);
    formData.append('price', String(pizza.price));
    formData.append('multipartFile', pizza.icon);
    return this.http.post(URL, formData);
  }

  updatePizza(id: number, pizza: PizzaDTO) {
    const formData: FormData = new FormData();
    formData.append('id', String(pizza.id));
    formData.append('name', pizza.name);
    formData.append('size', pizza.size);
    formData.append('price', String(pizza.price));
    if (pizza.icon != null) {
      formData.append('multipartFile', pizza.icon);
    }
    return this.http.put(URL + id, formData);
  }

  deletePizza(id: number) {
    this.http.delete(URL + id);
  }
}
