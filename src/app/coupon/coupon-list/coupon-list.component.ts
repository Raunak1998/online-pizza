import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from '../coupon';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {

  couponArray: Coupon[] = [];
  constructor(private couponService: CouponService, private router: Router) { }

  ngOnInit(): void {
    this.couponService.getAllCoupons().subscribe((response: any) =>
    {
      console.log('Get All Coupons: ' + response[0].id);
      this.couponArray = response;
    });
  }

}
