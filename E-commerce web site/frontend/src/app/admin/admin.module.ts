import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MUsersComponent } from './Components/m-users/m-users.component';
import { MCategoriesComponent } from './Components/m-categories/m-categories.component';
import { MProductsComponent } from './Components/m-products/m-products.component';
import { MOrdersComponent } from './Components/m-orders/m-orders.component';
import { DemoAngularMaterail } from '../DemoAngularMaterail';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './Components/m-products/Add_product_PopUp/add-product/add-product.component';
import { EditProductComponent } from './Components/m-products/Edite_product_PopUp/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    MUsersComponent,
    MCategoriesComponent,
    MProductsComponent,
    MOrdersComponent,
    AddProductComponent,
    EditProductComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
   BrowserAnimationsModule,
   MatToolbarModule,
   MatSidenavModule,
   MatButtonModule,
   MatIconModule,
   MatDividerModule,
   HttpClientModule,
   DemoAngularMaterail,
   FormsModule,
   ReactiveFormsModule
  ]
})
export class AdminModule { }
