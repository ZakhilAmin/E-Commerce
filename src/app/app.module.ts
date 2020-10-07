import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { UserService } from './user.service';
import { AdminAuthGaurdService } from './admin-auth-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'products', component: ProductComponent},
      {path:'shopping-cart', component:ShoppingCartComponent},
      {path: 'login',component:LoginComponent},

      {path: 'check-out',component:CheckOutComponent, canActivate: [AuthGaurdService]},
      {path: 'order-success',component:OrderSuccessComponent, canActivate: [AuthGaurdService]},
      {path: 'my/orders',component:MyOrderComponent,canActivate: [AuthGaurdService]},

      {path: 'admin/products',component:AdminProductsComponent, canActivate:[AuthGaurdService,AdminAuthGaurdService]},
      {path: 'admin/orders',component:AdminOrdersComponent,canActivate:[AuthGaurdService,AdminAuthGaurdService]},
     
    ])
  ],
  providers: [AuthService,AuthGaurdService, UserService, AdminAuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
