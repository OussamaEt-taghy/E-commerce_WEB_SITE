import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StokageUserService } from 'src/Services/stokage-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  isUserLoggedIn: boolean = StokageUserService.isUserLoggedIn();
  isAdminLoggedIn: boolean = StokageUserService.isAdminLoggedIn();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.isUserLoggedIn = StokageUserService.isUserLoggedIn();
      this.isAdminLoggedIn = StokageUserService.isAdminLoggedIn();
    });
  }

  logout(): void {
    StokageUserService.signOut();
    this.router.navigateByUrl('login');
  }
  status = false;
  addToggle()
  {
    this.status = !this.status;     }  
    activeItem: string = '';
  
    setActiveItem(item: string): void {
      this.activeItem = item;
    }
}

