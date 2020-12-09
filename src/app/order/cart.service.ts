import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Coupon } from '../coupon/coupon';
import { Pizza } from '../pizza/pizza';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Pizza[] = [];
  total = 0;
  coupon: Coupon = {
    couponName: 'No Coupon',
    couponType: '',
    couponDescription: '',
  };

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private router: Router,
  ) { }

  addItem(cartItem: Pizza) {
    const found = this.cartItems.find((item) => item.pizzaId === cartItem.pizzaId);
    if (!found) { this.cartItems.push(cartItem); }
  }

  getCartItems() {
    return this.cartItems;
  }

  async removeCartItem(index: number): Promise<void> {
    await this.cartItems.splice(index, 1);
  }

  getTotal() {
    this.total = 0;
    this.cartItems.forEach((item: any) => {
      this.total += item.pizzaCost;
    });
    console.log(this.total);
    return this.total;
  }

  async placeOrder(total: number): Promise<void> {
    const customer = this.auth.getCurrentCustomer();
    const date1 = new Date();
    const date = date1.toISOString();
    const order: Order = {
      orderDate: date,
      totalCost: total,
      pizzas: this.cartItems,
      customer,
      coupon: this.coupon
    };
    let completeOrder = {};
    await this.http.post('http://localhost:8080/order/insert', order).toPromise().then((response) => {
      completeOrder = response;
    }).catch((error: HttpErrorResponse) => {
      console.log(error);
    });
    this.router.navigate(['/order-details'], { queryParams: { order: JSON.stringify(completeOrder) } });
  }
}
