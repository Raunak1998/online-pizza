import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../customer/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  role = 'Customer';
  customer: Customer = {} as Customer;
  constructor(private httpClient: HttpClient) { }


  async validateUser(user: any): Promise<any> {
    console.log(user);
    let resp = {};
    if (user.username === 'admin' && user.password === 'admin123') {
      this.isLoggedIn = true;
      this.role = 'Admin';
    }
    else {
      await this.httpClient.post('http://localhost:8080/customer/login', user).toPromise().then((response: any) => {
        console.log(response);
        this.customer = response;
        alert('Login Successful');
        this.isLoggedIn = true;
        resp = {
          status: true
        };
      }).catch((error: HttpErrorResponse) => {
        resp = {
          status: false,
          error: error.error.message,
        };
      });
    }
    return resp;
  }

  async addNewUser(newCustomer: Customer): Promise<any> {
    let resp = {};
    this.httpClient.post('http://localhost:8080/customer/insert', newCustomer).toPromise().then((response: any) => {
      console.log(response);
      alert('Customer successfully added!');
      resp = {
        status: true
      };
    }).catch((error: HttpErrorResponse) => {
      resp = {
        status: false,
        error: error.error.message,
      };
    });
    return resp;
  }
}
