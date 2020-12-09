import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Coupon } from '../../coupon';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-coupon-show]',
  templateUrl: './coupon-show.component.html',
  styleUrls: ['./coupon-show.component.css']
})
export class CouponShowComponent implements OnInit {

  @Input() coupon: Coupon = {} as Coupon;
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  editCoupon(): void {
    this.router.navigate(['/coupon-add'], { queryParams: this.coupon });
  }

  getRole() {
    return this.authService.role;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }
}
