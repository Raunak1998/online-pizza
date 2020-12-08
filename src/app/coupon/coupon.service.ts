import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coupon } from './coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private httpClient: HttpClient) { }

  getAllCoupons(): any {
    return this.httpClient.get('http://localhost:8080/coupon/findAll');
  }

  async addCoupon(coupon: Coupon): Promise<any> {
    let resp = {};
    this.httpClient.post('http://localhost:8080/coupon/insert', coupon).toPromise().then((response: any) => {
      console.log(response);
      alert('Pizza successfully added!');
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
}
