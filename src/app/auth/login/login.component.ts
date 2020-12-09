import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = { userName: '', password: '' };
  error = '';
  redirectToCart = false;
  constructor(
    private authService: AuthService, private sharedService: SharedService, private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.queryParamMap;
    if (params.keys.length > 0) {
      if (params.get('redirectToCart')) {
        this.redirectToCart = true;
      }
    }
  }

  // tslint:disable-next-line: typedef
  async validate() {
    const resp: any = await this.authService.validateUser(this.user);
    if (!resp.status) {
      this.error = "Invalid Username/Password";
    }
    else {
      this.sharedService.setCurrentCustomer(this.authService.getCurrentCustomer());
      this.redirectToCart ? this.router.navigate(['/cart']) : this.router.navigate(['/']);
    }
  }
}
