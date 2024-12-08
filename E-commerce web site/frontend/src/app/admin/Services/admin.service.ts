import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { StokageUserService } from 'src/Services/stokage-user.service';
const BASE_URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  addCategory(categoryDto:any):Observable<any>{
    return this.http.post(`${BASE_URL}api/admin/AddCategory`,categoryDto)
  }
  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${BASE_URL}api/admin/DeleteCategory/${categoryId}`);
  }
  editProduct(productId: number, productDto: any): Observable<any> {
    return this.http.put(`${BASE_URL}api/admin/EditProduct/${productId}`, productDto);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${BASE_URL}api/admin/DeleteProduct/${productId}`).pipe(
      tap(() => console.log(`Product with ID ${productId} deleted`)),
      catchError(error => {
        console.error(`Error deleting product with ID ${productId}:`, error);
        throw error;
      })
    );
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${BASE_URL}api/admin/GetAllProducts`);
  }
  getAllCategories(): Observable<any> {
    return this.http.get(BASE_URL + 'api/admin/GetAllCategory').pipe(
      tap((categories: any) => console.log('Categories:', categories)),
      catchError(error => {
        console.error('Error fetching categories:', error);
        throw error;
      })
    );
  }
  addproduct(productDto:any):Observable<any>{
    return this.http.post(BASE_URL+'api/admin/addProduct',productDto)
  }
  getProductById(productId: number): Observable<any> {
    return this.http.get(`${BASE_URL}api/admin/${productId}`);
  }
  getAllUsers(): Observable<any> {
    return this.http.get(`${BASE_URL}auth/getAllusers`);
  }
  deleteUser(UserId: number): Observable<any> {
    return this.http.delete(`${BASE_URL}auth/DeleteUser/{id}${UserId}`).pipe(
      tap(() => console.log(`User with ID ${UserId} deleted`)),
      catchError(error => {
    console.error(`Error deleting user with ID ${UserId}:`, error);
        throw error;
      })
    );
  }
}
