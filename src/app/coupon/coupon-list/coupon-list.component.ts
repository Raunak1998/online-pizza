import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Coupon } from '../coupon';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {

  couponArray: Coupon[] = [];
  constructor(private couponService: CouponService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.couponService.getAllCoupons().subscribe((response: any) => {
      response.forEach((element: Coupon) => {
        if (element.couponName !== 'No Coupon') {
          this.couponArray.push(element);
        }
      });
    });
  }

  getRole() {
    return this.authService.role;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

}
