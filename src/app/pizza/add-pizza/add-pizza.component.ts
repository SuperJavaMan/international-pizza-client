import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PizzaService} from '../../service/pizza.service';
import {PizzaDTO} from '../model/pizzaDTO';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {

  form: FormGroup;
  icon: File;
  infoMessage;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      size: new FormControl(''),
      price: new FormControl('')
    });
  }

  addPizza(data) {
    const pizza: PizzaDTO = new PizzaDTO(data.name, data.size, data.price, this.icon);
    this.pizzaService.addPizza(pizza).subscribe(response => {
      this.infoMessage = 'The pizza added successfully to the pizza list!';
      this.icon = null;
    },
      error => this.infoMessage = error.error.message);
  }
  onFileChanged(event) {
    this.icon = event.target.files[0];
  }
}
