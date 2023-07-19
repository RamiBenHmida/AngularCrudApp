import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersAddEditComponent } from './pers-add-edit/pers-add-edit.component';
import { PersonService } from './services/person.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'crud-app';

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog, // MatDialog to open dialogs
    private _persService: PersonService, // Service to manage person data
    private _coreService: CoreService // Custom service for core functionalities
  ) {}

  ngOnInit(): void {
    this.getPersonList(); // Load the list of persons when the component initializes
  }

  openAddForm() {
    const dialogRef = this._dialog.open(PersAddEditComponent); // Open the dialog
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          // If the dialog is closed with a truthy value (e.g., true), refresh the person list
          this.getPersonList();
        }
      },
    });
  }
  // Function to apply filtering to the table data
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // Function to get the list of persons from the service and display them in the table
  getPersonList() {
    this._persService.getPersonList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res); // Create a new MatTableDataSource with the received data
        this.dataSource.sort = this.sort; // Set the sorting to the data source
        this.dataSource.paginator = this.paginator; // Set the paginator to the data source
      },
      error: console.log, // Log any errors that occurred while fetching the data

      //we can also write the same code in case error
      /*error: (error) => {
        console.log(err)
      }*/
    });
  }
  // Function to delete a person by their ID
  deletePerson(id: number) {
    this._persService.deletePerson(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Person deleted!', 'done'); // Display a snackbar with a success message
        this.getPersonList(); // Refresh the person list after successful deletion
      },
      error: console.log, // Log any errors that occurred during the deletion process
    });
  }
  // Function to open the edit dialog with the data of a specific person
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(PersAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          // If the dialog is closed with a truthy value (e.g., true), refresh the person list
          this.getPersonList();
        }
      },
    });
  }
}
