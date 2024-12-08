import { Component } from '@angular/core';
import { StokageUserService } from 'src/Services/stokage-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  isCollapsed!: boolean;
  dataSource: any;
  constructor(private router: Router) {}
  logout(): void {
    StokageUserService.signOut();
    this.router.navigateByUrl('login');
  }
  calculateTotalAmount(): number {
    // Your logic to calculate the total amount goes here
    // For example, you might fetch it from a service or calculate it based on your data
    return 3; // Replace with your actual total amount calculation
  }
  value = 'Clear me';
  // Bind this variable to the badge in the template
  totalAmount: number = this.calculateTotalAmount();
  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  showWelcomeParagraph: boolean = true;
}


