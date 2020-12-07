import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from '../../coupon';

@Component({
  selector: '[app-coupon-show]',
  templateUrl: './coupon-show.component.html',
  styleUrls: ['./coupon-show.component.css']
})
export class CouponShowComponent implements OnInit {

  @Input() coupon: any;
  constructor() { }

  ngOnInit(): void {
  }

}
