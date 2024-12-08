import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/admin/Services/admin.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm!: FormGroup; 
  listofCategories: any = []; 
  selectedFile: File | null = null; 
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService,
    private dialogRef: MatDialogRef<AddProductComponent>
  ){}

  onFileSelected (event: any) {
    this.selectedFile = event.target.files[0] || null; 
    this.previewImage();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  previewImage(){
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview = reader.result;
    }

    if (this.selectedFile) {
      reader.readAsDataURL(this.selectedFile);
    }
  }
  ngOnInit(): void {
    this.productForm = this.fb.group({
        categoryId: [null, [Validators.required]],
        name: [null, [Validators.required]], 
        price: [null, [Validators.required]],
        description: [null, [Validators.required]],
    });
    this.getAllCategories();
}

getAllCategories(){
  this.adminService.getAllCategories().subscribe(res => {
      console.log(res);  // Vérifiez la structure des catégories dans la console
      this.listofCategories = res;
  });
}

addProduct(): void {
  if (this.productForm.valid) {
    const formData: FormData = new FormData();
    formData.append('img', this.selectedFile!);
    formData.append('categoryId', this.productForm.get('categoryId')!.value);
    formData.append('name', this.productForm.get('name')!.value);
    formData.append('description', this.productForm.get('description')!.value);
    formData.append('price', this.productForm.get('price')!.value);

    this.adminService.addproduct(formData).subscribe((res) => {
      console.log(res); // Ajoutez cette ligne pour voir la réponse dans la console

      if (res.id != null) {
        this.snackBar.open('Product Posted Successfully!', 'Close', { duration: 5000 });
        this.router.navigateByUrl('product');
      } else {
        this.snackBar.open("Error to Add product", 'ERROR', {
          duration: 5000
        });
      }
    });
  } else {
    for (const i in this.productForm.controls) {
      this.productForm.controls[i].markAsDirty();
      this.productForm.controls[i].updateValueAndValidity();
    }
  }
}

}