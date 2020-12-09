import { Order } from '../order/order';

export interface Customer {
    customerId: number;
    firstName: string;
    lastName: string;
    customerMobile: number;
    customerEmail: string;
    customerAddress: string;
    userName: string;
    password: string;
    order: Order[];
}
