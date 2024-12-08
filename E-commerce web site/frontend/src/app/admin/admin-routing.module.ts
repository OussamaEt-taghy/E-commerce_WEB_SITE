import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MCategoriesComponent } from './Components/m-categories/m-categories.component';
import { MProductsComponent } from './Components/m-products/m-products.component';
import { MUsersComponent } from './Components/m-users/m-users.component';
import { MOrdersComponent } from './Components/m-orders/m-orders.component';
import { AddProductComponent } from './Components/m-products/Add_product_PopUp/add-product/add-product.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent, outlet: 'adminOutlet' },
      { path: 'dashboard', component: DashboardComponent, outlet: 'adminOutlet' },
      { path: 'users', component: MUsersComponent, outlet: 'adminOutlet' },
      { path: 'categories', component: MCategoriesComponent, outlet: 'adminOutlet' },
      { path: 'product', component: MProductsComponent, outlet: 'adminOutlet' },
      { path: 'orders', component: MOrdersComponent, outlet: 'adminOutlet' },
      {path:'addProduct',component:AddProductComponent,outlet:'adminOutlet'}
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
