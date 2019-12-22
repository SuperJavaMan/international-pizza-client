import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URL = 'http://localhost:8080/api/pizza';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  getPizzaList() {
    return this.http.get(URL);
  }
}
