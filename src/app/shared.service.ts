import { Injectable } from '@angular/core';
import { Customer } from './customer/customer';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  currentCustomer: any = null;
  constructor() { }

  setCurrentCustomer(customer: Customer): void{
    this.currentCustomer = customer;
  }
  getCurrentCustomer(): Customer{
    return this.currentCustomer;
  }
}
