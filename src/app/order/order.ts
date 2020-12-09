import { Coupon } from '../coupon/coupon';
import { Customer } from '../customer/customer';
import { Pizza } from '../pizza/pizza';

export interface Order{
    orderId?: number;
    orderDate: string;
    totalCost: number;
    customer: Customer;
    pizzas: Pizza[];
    coupon: Coupon;
}
