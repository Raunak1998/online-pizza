import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private httpClient: HttpClient) { }

  getAllCoupons(): any {
    return this.httpClient.get('http://localhost:8080/coupon/findAll');
  }
}
