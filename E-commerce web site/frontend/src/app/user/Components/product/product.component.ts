import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  searchProductForm!: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getAllProducts();
    this.searchProductForm = this.fb.group({
      title: [null, [Validators.required]]
    });
  }

  getAllProducts() {
    this.userService.getAllProducts().subscribe(res => {
      this.products = res.map((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        return element;
      });
    });
  }

  submitForm() {
    this.products = [];
    const title = this.searchProductForm.get('title')!.value;
    this.userService.getProductById(title).subscribe(res => {
      this.products = res.map((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        return element;
      });
    });
  }
  addToCart(product: any) {
    // Logique pour ajouter le produit au panier
    console.log('Product added to cart:', product);
  }
  
  
}
