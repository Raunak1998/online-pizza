import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  currentUser: any = null;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.currentUser = this.sharedService.getCurrentCustomer();
  }

}
