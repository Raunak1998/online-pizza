import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  newCoupon = true;
  constructor(
    private couponService: CouponService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.queryParamMap;
    if (params.keys.length > 0) {
      this.coupon.couponDescription = params.get('couponDescription') ?? '';
      this.coupon.couponName = params.get('couponName') ?? '';
      this.coupon.couponType = params.get('couponType') ?? '';
      this.newCoupon = false;
    }
  }

  async submitCouponForm(): Promise<void> {
    let resp;
    if (this.newCoupon) {
      resp = await this.couponService.addCoupon(this.coupon);
    }
    else {
      resp = await this.couponService.editCoupon(this.coupon);
    }
    console.log(resp);
    if (!resp.status) {
      this.error = resp.error;
    }
    this.router.navigate(['/coupon-list']);
  }
}
