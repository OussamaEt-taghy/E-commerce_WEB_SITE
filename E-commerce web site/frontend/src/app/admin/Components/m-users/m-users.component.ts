import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../Services/admin.service';

@Component({
  selector: 'app-m-users',
  templateUrl: './m-users.component.html',
  styleUrls: ['./m-users.component.css']
})
export class MUsersComponent {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ["id", "name", "email", "password", "role","action"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dialog: any;

  
  constructor(private service: AdminService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.service.getAllUsers().subscribe(
      (users: any[]) => {
        console.log('Users', users);
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error: any) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  openDeleteUserDialog(userId: number) {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');

    if (confirmDelete) {
      this.service.deleteUser(userId).subscribe(
        () => {
          console.log(`Product with ID ${userId} deleted successfully`);
          this.loaduser(); 
        },
        (        error: any) => console.error('Error deleting product:', error)
      );
    }
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
    _popup.afterClosed().subscribe(() => {
      this.loaduser();
    });
  }
  loaduser() {
    this.service.getAllUsers().subscribe(
      (users: any[]) => {
        console.log('Users', users);  
        this.dataSource.data = users;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (      error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  } 
}
