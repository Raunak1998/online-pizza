import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: any;
  @Input()
  index = 0;
  @Output()
  recalculate: any = new EventEmitter();
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  async removeFromCart(): Promise<void> {
    await this.cartService.removeCartItem(this.index);
    this.recalculate.emit();
  }

}
