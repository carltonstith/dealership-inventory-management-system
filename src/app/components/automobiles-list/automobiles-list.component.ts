import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-automobiles-list',
  templateUrl: './automobiles-list.component.html',
  styleUrls: ['./automobiles-list.component.css']
})
export class AutomobilesListComponent implements OnInit {

  displayedColumns: string[] = ['make', 'model', 'year', 'price', 'color', 'condition', 'comment', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService){}

  ngOnInit() {
    this.getAllVehicles();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    }).afterClosed().subscribe(val => {
      if(val === 'save') {
        this.getAllVehicles()
      }
    })
  }

  getAllVehicles() {
    this.api.getAllVehicles().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('There was an error while fetching the records')
      }
    })
  }

  editProduct(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if(val === 'update') {
        this.getAllVehicles();
      }
    })
  }

  deleteVehicle(id: number) {
    this.api.deleteVehicle(id).subscribe({
      next:(res) => {
        alert('The product was deleted');
        this.getAllVehicles();
      },
      error: () => {
        alert('There was an error deleting the record');
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
