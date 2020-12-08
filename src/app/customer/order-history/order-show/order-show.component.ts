import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-order-show]',
  templateUrl: './order-show.component.html',
  styleUrls: ['./order-show.component.css']
})
export class OrderShowComponent implements OnInit {

  @Input() order: any;
  constructor() { }

  ngOnInit(): void {
  }

}
