import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from '../coupon';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupon-add',
  templateUrl: './coupon-add.component.html',
  styleUrls: ['./coupon-add.component.css']
})
export class CouponAddComponent implements OnInit {

  coupon: Coupon = {} as Coupon;
  error = '';
  constructor(private couponService: CouponService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async addNewCoupon(){
    const resp = await this.couponService.addCoupon(this.coupon);
    console.log(resp);
    alert('Coupon Successfully Added');
    if (!resp.status) {
      this.error = resp.error;
    }
    this.router.navigate(['/coupon-list']);
  }
}
