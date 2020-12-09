import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CouponAddComponent } from './coupon/coupon-add/coupon-add.component';
import { CouponListComponent } from './coupon/coupon-list/coupon-list.component';
import { EditProfileComponent } from './customer/edit-profile/edit-profile.component';
import { MyProfileComponent } from './customer/my-profile/my-profile.component';
import { OrderHistoryComponent } from './customer/order-history/order-history.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './order/cart/cart.component';
import { ViewOrderComponent } from './order/view-order/view-order.component';
import { PizzaAddComponent } from './pizza/pizza-add/pizza-add.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'coupon-list', component: CouponListComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'order-history', component: OrderHistoryComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'view-order', component: ViewOrderComponent},
  {path: 'menu', component: PizzaListComponent},
  {path: 'pizza-add', component: PizzaAddComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'coupon-add', component: CouponAddComponent},
  {path: 'order-details', component: OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
