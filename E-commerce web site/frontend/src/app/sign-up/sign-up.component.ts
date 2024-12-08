import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/Services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  hidePassword = true;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }
  onSubmit(): void {
    this.authService.signUp(this.signupForm.value).subscribe(
      (response) => {
        this.snackBar.open('Inscription réussie!', 'Close', { duration: 5000 });
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.error('Erreur lors de l\'inscription :', error);
        this.snackBar.open('L\'inscription a échoué. Veuillez réessayer.', 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar',
        });
      }
    );
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
