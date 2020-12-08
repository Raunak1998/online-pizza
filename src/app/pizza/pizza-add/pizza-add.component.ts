import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css']
})
export class PizzaAddComponent implements OnInit {

  pizza: Pizza = {} as Pizza;
  error = '';
  constructor(private pizzaService: PizzaService, private router: Router) { }

  ngOnInit(): void {
  }

  async addNewPizza(){
    const resp = await this.pizzaService.addPizza(this.pizza);
    console.log(resp);
    alert('Pizza Successfully Added');
    if (!resp.status) {
      this.error = resp.error;
    }
    this.router.navigate(['/menu']);
  }
}
