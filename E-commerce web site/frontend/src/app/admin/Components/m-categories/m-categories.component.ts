import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../../Services/admin.service';

@Component({
  selector: 'app-m-categories',
  templateUrl: './m-categories.component.html',
  styleUrls: ['./m-categories.component.css']
})
export class MCategoriesComponent implements OnInit {
  categoryForm!: FormGroup;
  deleteCategoryForm!: FormGroup;
  listofCategories!: any[]; // Ajoutez le type correct

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });

    this.deleteCategoryForm = this.fb.group({
      categoryId: [null, [Validators.required]],
    });
    
    // Vous devez peut-être appeler la méthode getAllCategoriesAsync ici
    this.getAllCategoriesAsync();
  }

  getAllCategoriesAsync(): void {
    this.adminService.getAllCategories().subscribe(res => {
      console.log(res);
      this.listofCategories = res;
    });
  }

  addCategory(): void {
    if (this.categoryForm.valid) {
      this.adminService.addCategory(this.categoryForm.value).subscribe(
        (res) => {
          console.log('Server Response:', res);
          if (res && res.id != null) {
            this.snackBar.open('Category Posted Successfully!', 'Close', { duration: 5000 });
            this.categoryForm.reset();
          } else {
            const errorMessage = res.message || 'An error occurred. Please try again.';
            this.snackBar.open(errorMessage, 'Close', {
              duration: 5000,
              panelClass: 'error-snackbar'
            });
          }
        },
        (error) => {
          console.error('Server Error:', error);
          this.snackBar.open('An error occurred. Please try again.', 'Close', {
            duration: 5000,
            panelClass: 'error-snackbar'
          });
        }
      );
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }

  deleteCategory(): void {
    if (this.deleteCategoryForm.valid) {
      const categoryId = this.deleteCategoryForm.value.categoryId;
      this.adminService.deleteCategory(categoryId).subscribe(
        () => {
          this.snackBar.open('Category Deleted Successfully!', 'Close', { duration: 5000 });
          this.deleteCategoryForm.reset();
        },
        (error: any) => {
          console.error('Server Error:', error);
          this.snackBar.open('An error occurred. Please try again.', 'Close', {
            duration: 5000,
            panelClass: 'error-snackbar'
          });
        }
      );
    } else {
      this.deleteCategoryForm.markAllAsTouched();
    }
  }
}
