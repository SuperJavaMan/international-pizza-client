import { Component, OnInit } from '@angular/core';
import {Pizza} from '../../../pizza/model/pizza';
import {PizzaService} from '../../../service/pizza.service';

@Component({
  selector: 'app-admin-pizza-list',
  templateUrl: './admin-pizza-list.component.html',
  styleUrls: ['./admin-pizza-list.component.css']
})
export class AdminPizzaListComponent implements OnInit {

  pizzaList: Pizza[];
  infoMessage;
  isDataLoaded;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService.getPizzaList().subscribe((response: Pizza[]) => {
      this.pizzaList = response;
      this.isDataLoaded = true;
      this.infoMessage = 'Data received successfully';
    },
      error => {
      this.infoMessage = 'Data loading error. => ' + error.error.message;
      this.isDataLoaded = false;
      });
  }

}
