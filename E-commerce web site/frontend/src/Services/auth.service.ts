import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { StokageUserService } from './stokage-user.service';
const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
    private stokageUserService:StokageUserService) {}

  signUp(signUpDTORequest: any): Observable<any> {
    return this.http.post(`${BASE_URL}auth/Sign-Up`, signUpDTORequest)
      .pipe(
        catchError(error => throwError(error))
      );
  }
  login(username: string, password: string): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { username, password };
  
    return this.http.post(BASE_URL + 'auth/Login', body, { headers, observe: 'response' }).pipe(
      map((res) => {
        const authHeader = res.headers.get('Authorization');
        if (authHeader) {
          const token = authHeader.substring(7);
          const user = res.body;
          if (token && user) {
            this.stokageUserService.saveToken(token);
            this.stokageUserService.saveUser(user);
            return true;
          }
        }
        return false;
      })
    );
  }
  
}
