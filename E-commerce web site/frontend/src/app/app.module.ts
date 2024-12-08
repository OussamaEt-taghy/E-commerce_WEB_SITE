import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { StokageUserService } from 'src/Services/stokage-user.service';
import { DemoAngularMaterail } from './DemoAngularMaterail';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminRoutingModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    DemoAngularMaterail,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    UserRoutingModule
   


  ],
  providers: [StokageUserService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
