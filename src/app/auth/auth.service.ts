import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../customer/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  role = 'Customer';
  customer: any = null;
  constructor(private httpClient: HttpClient) { }


  async validateUser(user: any): Promise<any> {
    let resp = {};
    if (user.username === 'admin' && user.password === 'admin123') {
      this.isLoggedIn = true;
      this.role = 'Admin';
    }
    else {
      await this.httpClient.post('http://localhost:8080/customer/login', user).toPromise().then((response: any) => {
        console.log('Auth' + response);
        this.customer = response;
        console.log(this.customer);
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

  getCurrentCustomer(): Customer{
    return this.customer;
  }

  async updateCurrentUserDetails(updateUser: any): Promise<any>{
    let resp = {};
    this.httpClient.put('http://localhost:8080/customer/update', updateUser).toPromise().then((response: any) => {
      console.log(response);
      alert('Customer successfully update!');
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
