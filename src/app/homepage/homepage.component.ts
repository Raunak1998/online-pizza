import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza/pizza';
import { PizzaService } from '../pizza/pizza.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
