import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  newPizza = false;
  constructor(
    private pizzaService: PizzaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.queryParamMap;
    if (params.keys.length > 0) {
      this.pizza.pizzaCost = parseInt(params.get('pizzaCost') ?? '0', 10);
      this.pizza.pizzaDescription = params.get('pizzaDescription') ?? '';
      this.pizza.pizzaType = params.get('pizzaType') ?? '';
      this.pizza.pizzaSize = params.get('pizzaSize') ?? '';
      this.pizza.pizzaName = params.get('pizzaName') ?? '';
      this.pizza.pizzaId = parseInt(params.get('pizzaId') ?? '0', 10);
      this.newPizza = true;
    }
  }


  async submitPizzaForm(): Promise<void> {
    let resp;
    if (this.newPizza) {
      resp = await this.pizzaService.addPizza(this.pizza);
    }
    else {
      resp = await this.pizzaService.editPizza(this.pizza);
    }
    console.log(resp);
    if (!resp.status) {
      this.error = resp.error;
    }
    this.router.navigate(['/menu']);
  }
}
