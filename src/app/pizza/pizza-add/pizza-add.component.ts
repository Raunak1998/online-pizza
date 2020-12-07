import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css']
})
export class PizzaAddComponent implements OnInit {

  pizza: Pizza = {pizzaId: 0, pizzaName: '', pizzaType: '', pizzaDescription: '', pizzaCost: 200, pizzaSize: ''}
  constructor() { }

  ngOnInit(): void {
  }

}
