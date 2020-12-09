import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sharedService: SharedService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  getRole() {
    return this.authService.role;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  // tslint:disable-next-line: typedef
  getUser() {
    return this.sharedService.getCurrentCustomer();
  }

  logout(): void {
    this.authService.logout();
  }
}
