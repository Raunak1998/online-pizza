import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role = '';
  isLoggedIn = false;
  constructor(private sharedService: SharedService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.role = this.authService.role;
  }

  // tslint:disable-next-line: typedef
  getUser(){
    return this.sharedService.getCurrentCustomer();
  }

  logout(): void {
    this.authService.logout();
  }
}
