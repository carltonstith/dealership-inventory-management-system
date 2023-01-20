import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  conditionList = ['New', 'Used'];
  vehicleInventoryForm!: FormGroup;
  actionBtn: string = "Save";

  constructor(
    private formBuilder:FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit() {
    this.vehicleInventoryForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      price: ['', Validators.required],
      color: ['', Validators.required],
      condition: ['', Validators.required],
      comment: ['', Validators.required],
    });

    if(this.editData) {
      this.actionBtn = "Update";
      this.vehicleInventoryForm.controls['make'].setValue(this.editData.make);
      this.vehicleInventoryForm.controls['model'].setValue(this.editData.model);
      this.vehicleInventoryForm.controls['year'].setValue(this.editData.year);
      this.vehicleInventoryForm.controls['price'].setValue(this.editData.price);
      this.vehicleInventoryForm.controls['color'].setValue(this.editData.color);
      this.vehicleInventoryForm.controls['condition'].setValue(this.editData.condition);
      this.vehicleInventoryForm.controls['comment'].setValue(this.editData.comment);
    }
  }

  addProduct() {
    if(!this.editData) {
      if(this.vehicleInventoryForm.valid) {
        this.api.postVehicle(this.vehicleInventoryForm.value).subscribe({
          next:(res) => {
            alert("The vehicle was added")
            this.vehicleInventoryForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert("There was an error while adding the vehicle")
          }
        })
      }
    } else {
      this.updateVehicle()
    }
  }

  updateVehicle() {
    this.api.updateVehicle(this.vehicleInventoryForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert("The vehicle was updated");
        this.vehicleInventoryForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert("There was an error updating the record");
      }
    })
  }

}
