import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {userName: '', password: ''};
  error = '';
  constructor(private authService: AuthService, private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async validate(){
    const resp: any = await this.authService.validateUser(this.user);
    console.log(resp);
    console.log(this.authService.getCurrentCustomer());
    if (!resp.status) {
      this.error = resp.error;
    }
    this.sharedService.setCurrentCustomer(this.authService.getCurrentCustomer());
    this.router.navigate(['/']);
  }
}
