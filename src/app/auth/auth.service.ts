import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  role = 'Anonymous';
  customer: any = null;
  constructor(private httpClient: HttpClient, private router: Router) { }

  async logout(): Promise<void> {
    this.isLoggedIn = false;
    this.role = 'Customer';
    this.customer = null;
    await this.router.navigate(['/']);
    window.location.reload();
  }

  async validateUser(user: any): Promise<any> {
    let resp = {};
    if (user.userName === 'admin') {
      if (user.password === 'admin123') {
        this.isLoggedIn = true;
        this.role = 'Admin';
        resp = {
          status: true,
        };
      } else {
        resp = {
          status: false,
          error: 'Incorrect username/password.'
        };
      }
    }
    else {
      await this.httpClient.post('http://localhost:8080/customer/login', user).toPromise().then((response: any) => {
        this.customer = response;
        this.isLoggedIn = true;
        this.role = 'Customer';
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

  getCurrentCustomer(): Customer {
    return this.customer;
  }

  async updateCurrentUserDetails(updateUser: any): Promise<any> {
    let resp = {};
    this.httpClient.put('http://localhost:8080/customer/update', updateUser).toPromise().then((response: any) => {
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
