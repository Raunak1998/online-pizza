import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer/customer';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newCustomer: Customer = {} as Customer;
  error = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async registerNewUser() {
    const resp = await this.authService.addNewUser(this.newCustomer);
    if (!resp.status) {
      this.error = resp.error;
    }
    this.router.navigate(['/login']);
  }


}
