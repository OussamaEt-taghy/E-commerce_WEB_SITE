import { Component,OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { MatSnackBar } from '@angular/material/snack-bar';
  import { Route, Router } from '@angular/router';
  import { AuthService } from 'src/Services/auth.service';
import { StokageUserService } from 'src/Services/stokage-user.service';

  import { __values } from 'tslib';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent {
    loginForm!:FormGroup;
    hidePassword=true;
    constructor(
      private formBuilder:FormBuilder,
      private autheService:AuthService,
      private snackBar:MatSnackBar,
      private router :Router
      
    ){}
    ngOnInit():void{
      this.loginForm=this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]]
    })
    }
    togglePasswordVisibility(){
      this.hidePassword = !this.hidePassword;
    }
    onSubmit():void{
      const username = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;
      this.autheService.login(username,password).subscribe(
        (res:any) =>{
          if(StokageUserService.isAdminLoggedIn()){
            this.router.navigateByUrl('/admin');
          }
          else if(StokageUserService.isUserLoggedIn()){
            this.router.navigateByUrl('/user');
          }
        },
        (error:any) =>{
          this.snackBar.open('mauvaise connexion','Error',{duration:5000})
        }
      )
     
    }
}
