import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/order/cart.service';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService, private cartService: CartService) {}

  ngOnInit(): void {
    this.pizzaService.getAllPizzas().subscribe((response: Array<Pizza>) => {
      this.pizzas = response.slice(0, 6);
    });
  }

  // tslint:disable-next-line: typedef
  addToCart(pizza: Pizza){
    this.cartService.addItem(pizza);
  }

}
