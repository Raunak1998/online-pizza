import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  async getAllOrders(): Promise<any> {
    let orders: Order[] = [];
    const customer = this.authService.getCurrentCustomer();
    await this.httpClient.get('http://localhost:8080/order/find/customer/' + customer.customerId).toPromise().then((response: any) => {
      orders = response;
    }).catch((error: HttpErrorResponse) => {
      console.log(error);
    });
    return orders;
  }
}
