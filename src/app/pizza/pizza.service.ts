import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private httpClient: HttpClient) {

  }

  getAllPizzas(): any {
    return this.httpClient.get('http://localhost:8080/pizza/findAll');
  }
}
