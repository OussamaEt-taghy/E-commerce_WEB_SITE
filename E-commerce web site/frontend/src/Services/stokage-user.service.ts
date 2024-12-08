import { Injectable } from '@angular/core';

const TOKEN = 'ecom-token';
const USER = 'ecom-user'; 

@Injectable({
  providedIn: 'root'
})
export class StokageUserService {
  constructor() { }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  static getUser(): any {
    return JSON.parse(localStorage.getItem(USER) || '{}');
  }

  static getUserId(): string {
    const user = this.getUser();
    return user?.userId || '';
  }

  static getUserRole(): string {
    const user = this.getUser();
    return user?.role || '';
  }

  static isAdminLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null && this.getUserRole() === 'ADMIN';
  }

  static isUserLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null && this.getUserRole() === 'User';
  }

  static signOut(): void {
    console.log('Signing out...');
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
    console.log('Signed out.');
  }
}
