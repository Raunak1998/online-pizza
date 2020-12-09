import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private httpClient: HttpClient) {

  }

  getAllPizzas(): any {
    return this.httpClient.get('http://localhost:8080/pizza/findAll');
  }

  async addPizza(pizza: Pizza): Promise<any> {
    let resp = {};
    await this.httpClient.post('http://localhost:8080/pizza/insert', pizza).toPromise().then((response: any) => {
      alert('Pizza successfully added!');
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

  async editPizza(pizza: Pizza): Promise<any> {
    let resp = {};
    await this.httpClient.put('http://localhost:8080/pizza/update', pizza).toPromise().then((response: any) => {
      alert('Pizza successfully edited!');
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
