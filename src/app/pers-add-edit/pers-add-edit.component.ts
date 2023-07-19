import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-pers-add-edit',
  templateUrl: './pers-add-edit.component.html',
  styleUrls: ['./pers-add-edit.component.scss'],
})
export class PersAddEditComponent implements OnInit {
  persForm: FormGroup; // Form group to hold the form controls

  constructor(
    private _fb: FormBuilder, // FormBuilder to create the form
    private _persService: PersonService, // Service to manage person data
    private _dialogRef: MatDialogRef<PersAddEditComponent>, // Reference to the dialog instance
    @Inject(MAT_DIALOG_DATA) public data: any, // Inject data passed to the dialog
    private _coreService: CoreService // Custom service for core functionalities
  ) {
    // Initialize the form group with empty form controls for firstName, lastName, and email
    this.persForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
    });
  }

  ngOnInit(): void {
    // When the component initializes, populate the form with the existing data (if available)
    this.persForm.patchValue(this.data);
  }
  // Function to submit form (updating or adding new person)
  onFormSubmit() {
    if (this.persForm.valid) {
      if (this.data) {
        // If data exists (editing existing person), update the person using the PersonService
        this._persService
          .updatePerson(this.data.id, this.persForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Person detail updated!'); // Display success message
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err); // Log any errors that occurred during the update process
            },
          });
      } else {
        this._persService.addPerson(this.persForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Person added successfully'); // Display success message
            this._dialogRef.close(true); // Close the dialog and pass 'true' as the result
          },
          error: (err: any) => {
            console.error(err); // Log any errors that occurred during the addition process
          },
        });
      }
    }
  }
}
