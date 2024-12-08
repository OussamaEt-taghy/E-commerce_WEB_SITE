import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getProductById(title: string): Observable<any> {
    return this.http.get(`${BASE_URL}api/user/products?title=${title}`);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`${BASE_URL}api/user/products`);
  }
}
