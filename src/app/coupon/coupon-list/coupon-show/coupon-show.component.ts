import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ) {}

  ngOnInit(): void {
  }

  editCoupon(): void {
    this.router.navigate(['/coupon-add'], { queryParams: this.coupon });
  }

}
