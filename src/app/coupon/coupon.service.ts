import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../order/cart.service';
import { Coupon } from './coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private httpClient: HttpClient, private cartService: CartService, private authService: AuthService) { }

  getAllCoupons(): any {
    return this.httpClient.get('http://localhost:8080/coupon/findAll');
  }

  async addCoupon(coupon: Coupon): Promise<any> {
    let resp = {};
    await this.httpClient.post('http://localhost:8080/coupon/insert', coupon).toPromise().then((response: any) => {
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
    let resp = false;
    await this.httpClient.get('http://localhost:8080/coupon/find/' + couponCode).toPromise().then((response: any) => {
      this.cartService.coupon = response;
      resp = true;
    }).catch((error: HttpErrorResponse) => {
      resp = false;
    });
    return resp;
  }

  getRole() {
    return this.authService.role;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }
}
