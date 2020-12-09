import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
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
  hpPizzas: Pizza[] = [];
  cartItems: any = [];

  constructor(
    private pizzaService: PizzaService,
    private cartService: CartService,
    public router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.pizzaService.getAllPizzas().subscribe((response: Array<Pizza>) => {
      this.pizzas = response;
      this.hpPizzas = response.slice(0, 6);
    });
    this.cartItems = this.cartService.getCartItems();
  }

  addToCart(pizza: Pizza): void {
    this.cartService.addItem(pizza);
  }

  getRole() {
    return this.authService.role;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }
}
