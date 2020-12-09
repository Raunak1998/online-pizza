import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { PizzaShowComponent } from './pizza/pizza-list/pizza-show/pizza-show.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PizzaAddComponent } from './pizza/pizza-add/pizza-add.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { MyProfileComponent } from './customer/my-profile/my-profile.component';
import { OrderHistoryComponent } from './customer/order-history/order-history.component';
import { CouponListComponent } from './coupon/coupon-list/coupon-list.component';
import { ViewOrderComponent } from './order/view-order/view-order.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { FooterComponent } from './footer/footer/footer.component';
import { CartComponent } from './order/cart/cart.component';
import { CarouselComponent } from './navbar/carousel/carousel.component';
import { CouponShowComponent } from './coupon/coupon-list/coupon-show/coupon-show.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartItemComponent } from './order/cart/cart-item/cart-item.component';
import { EditProfileComponent } from './customer/edit-profile/edit-profile.component';
import { OrderShowComponent } from './customer/order-history/order-show/order-show.component';
import { CouponAddComponent } from './coupon/coupon-add/coupon-add.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaShowComponent,
    PizzaAddComponent,
    NavbarComponent,
    MyProfileComponent,
    OrderHistoryComponent,
    CouponListComponent,
    ViewOrderComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    FooterComponent,
    CartComponent,
    CarouselComponent,
    CouponShowComponent,
    HomepageComponent,
    CartItemComponent,
    EditProfileComponent,
    OrderShowComponent,
    CouponAddComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
