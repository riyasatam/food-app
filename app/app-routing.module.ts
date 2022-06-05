import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { ShowCustComponent } from './customer/show-cust/show-cust.component';
import { AddEditCustComponent } from './customer/add-edit-cust/add-edit-cust.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'orders', component: OrdersComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'contact', component: ContactComponent},
  {path:'customer',component:CustomerComponent},
  {path:'admin-profile',component:AdminProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
