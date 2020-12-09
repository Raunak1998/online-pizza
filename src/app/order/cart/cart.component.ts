import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CouponService } from 'src/app/coupon/coupon.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem: any;
  cartItems: any = [];
  total = 0;
  couponCode = '';
  couponApplied = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private couponService: CouponService,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartService.getTotal();
    this.couponApplied = false;
    this.couponCode = '';
  }

  // tslint:disable-next-line: typedef
  continueShopping() {
    this.router.navigate(['/menu']);
  }

  async applyCoupon(): Promise<void> {
    if (await this.couponService.checkCoupon(this.couponCode)) {
      const discount = 20;
      this.total = this.total - ((discount * this.total) / 100);
      this.couponApplied = true;
    } else {
      alert('No such coupon');
    }
  }

  redirectToLogin(): void {
    this.router.navigate(['/login'], { queryParams: { redirectToCart: true } });
  }

  placeOrder(): void {
    this.cartService.placeOrder(this.total);
  }
}
