import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  currentUser: any = null;
  constructor(private sharedService: SharedService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.sharedService.getCurrentCustomer();
  }

  submitEditForm(): any{
    this.authService.updateCurrentUserDetails(this.currentUser);
    console.log('Details Updated');
    alert('Details Updated Successfully');
    this.router.navigate(['my-profile']);
  }
}
