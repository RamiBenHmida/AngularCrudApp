// Import necessary modules and dependencies
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private _snackBar: MatSnackBar) {}

  // Function to open a snackbar with the specified message and action
  openSnackBar(message: string, action: string = 'ok') {
    // Display the snackbar with the given message and action
    // The snackbar will be automatically dismissed after 1000 milliseconds (1 second)
    this._snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top', // Display the snackbar at the top of the screen
    });
  }
}
