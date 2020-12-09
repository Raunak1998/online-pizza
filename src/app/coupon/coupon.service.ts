import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from '../order/cart.service';
import { Coupon } from './coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private httpClient: HttpClient, private cartService: CartService) { }

  getAllCoupons(): any {
    return this.httpClient.get('http://localhost:8080/coupon/findAll');
  }

  async addCoupon(coupon: Coupon): Promise<any> {
    let resp = {};
    await this.httpClient.post('http://localhost:8080/coupon/insert', coupon).toPromise().then((response: any) => {
      console.log(response);
      alert('Coupon successfully added!');
      resp = {
        status: true
      };
    }).catch((error: HttpErrorResponse) => {
      resp = {
        status: false,
        error: error.error.message,
      };
    });
    return resp;
  }

  async editCoupon(coupon: Coupon): Promise<any> {
    let resp = {};
    await this.httpClient.put('http://localhost:8080/coupon/update', coupon).toPromise().then((response: any) => {
      console.log(response);
      alert('Coupon successfully edited!');
      resp = {
        status: true
      };
    }).catch((error: HttpErrorResponse) => {
      resp = {
        status: false,
        error: error.error.message,
      };
    });
    return resp;
  }

  async checkCoupon(couponCode: string): Promise<boolean> {
    console.log(couponCode);
    let resp = false;
    await this.httpClient.get('http://localhost:8080/coupon/find/' + couponCode).toPromise().then((response: any) => {
      console.log(response);
      this.cartService.coupon = response;
      resp = true;
    }).catch((error: HttpErrorResponse) => {
      resp = false;
    });
    return resp;
  }
}
