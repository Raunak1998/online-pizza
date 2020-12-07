import { Injectable } from '@angular/core';
import { Pizza } from '../pizza/pizza';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any = [];
  total = 0;

  constructor() { }

  // tslint:disable-next-line: typedef
  addItem(cartItem: Pizza){
    this.cartItems.push(cartItem);
  }

  // tslint:disable-next-line: typedef
  getCartItems(){
    return this.cartItems;
  }

  // tslint:disable-next-line: typedef
  getTotal(){
    this.total = 0;
    this.cartItems.forEach((item: any) => {
      // tslint:disable-next-line: radix
      this.total += item.pizzaCost;
   });
    console.log(this.total);
    return this.total;
  }
}
