// Importez les modules nécessaires
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from '../../Services/admin.service';
import { AddProductComponent } from './Add_product_PopUp/add-product/add-product.component';
import { EditProductComponent } from './Edite_product_PopUp/edit-product/edit-product.component';

@Component({
  selector: 'app-m-products',
  templateUrl: './m-products.component.html',
  styleUrls: ['./m-products.component.css']
})
export class MProductsComponent {

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ["id", "name", "price", "description", "image", "category", "action"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: AdminService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<any[]>([]);
  }
  openAddProductDialog() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '40%',
      data: {}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.loadproduct();
    });
  }
  ngOnInit() {
    this.loadproduct();
  }
  imageLoadError(event: any) {
    console.error('Image load error:', event);
  }
  
  loadproduct() {
    this.service.getAllProducts().subscribe(
      (products: any[]) => {
        console.log('Products:', products);  
    
        console.log('Image Links:', products.map(product => product.byteImg));
        this.dataSource.data = products;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }  
  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  Openpopup(code: any, title: any, component: any) {
    var _popup = this.dialog.open(component, {
      width: '40%',
      height:'70%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
      this.loadproduct();
    });
  }
  openEditProductDialog(productId: number) {
    this.service.getProductById(productId).subscribe((productDetails: any) => {
      const dialogRef = this.dialog.open(EditProductComponent, {
        width: '40%',
        data: {
          productDetails: productDetails
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.loadproduct();
      });
    });
  }
  openDeleteProductDialog(productId: number) {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');

    if (confirmDelete) {
      this.service.deleteProduct(productId).subscribe(
        () => {
          console.log(`Product with ID ${productId} deleted successfully`);
          this.loadproduct(); // Rafraîchissez les produits après la suppression
        },
        error => console.error('Error deleting product:', error)
      );
    }
  }
  
}
