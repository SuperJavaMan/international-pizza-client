import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PizzaService} from '../../service/pizza.service';
import {PizzaDTO} from '../model/pizzaDTO';
import {ActivatedRoute} from '@angular/router';
import {Pizza} from '../model/pizza';

@Component({
  selector: 'app-update-pizza',
  templateUrl: './update-pizza.component.html',
  styleUrls: ['./update-pizza.component.css']
})
export class UpdatePizzaComponent implements OnInit {
  pizzaId;
  pizza: Pizza;
  form: FormGroup;
  icon: File;
  infoMessage;
  isResponseReceived;
  constructor(private pizzaService: PizzaService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.icon = null;
    this.initFormGroup();
    this.pizzaId = this.activeRoute.snapshot.params['id'];
    this.pizzaService.getPizzaById(this.pizzaId).subscribe((pizza: Pizza) => {
      this.pizza = pizza;
      this.form.setValue({
        name: this.pizza.name,
        size: this.pizza.size,
        price: this.pizza.price
      });
      this.isResponseReceived = true;
      },
      error => this.infoMessage = error.error.message);
  }

  updatePizza(data) {
    const pizza: PizzaDTO = new PizzaDTO(data.name, data.size, data.price, this.icon);
    this.pizzaService.updatePizza(this.pizzaId, pizza).subscribe(response => {
        this.infoMessage = 'The pizza updated successfully!';
        this.icon = null;
      },
      error => this.infoMessage = error.error.message);
  }
  onFileChanged(event) {
    this.icon = event.target.files[0];
  }

  initFormGroup() {
    this.form = new FormGroup({
      name: new FormControl(''),
      size: new FormControl(''),
      price: new FormControl('')
    });
  }
}
