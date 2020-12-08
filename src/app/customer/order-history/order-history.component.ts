import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order/order';
import { OrderService } from 'src/app/order/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderArray: Order[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderArray = this.orderService.getAllOrders();
    console.log(this.orderArray);
  }

}
