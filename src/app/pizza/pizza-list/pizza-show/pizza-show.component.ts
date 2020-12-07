import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../pizza';

@Component({
  selector: 'app-pizza-show',
  templateUrl: './pizza-show.component.html',
  styleUrls: ['./pizza-show.component.css']
})
export class PizzaShowComponent implements OnInit {

  @Input()
  pizza: Pizza = {} as Pizza;

  @Output()
  send: any = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  cart(pizza: Pizza){
    this.send.emit(pizza);
  }
}
