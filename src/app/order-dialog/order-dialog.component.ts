import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {

  displayColums = ['Picked up', 'On delivery', 'Recevied', 'Payment Success']
  orderForm !: FormGroup
  actionButton = 'Save'  //set action button name to 'save' as a default

  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder,
    private backendService: BackendService,
    private dialogRef: MatDialogRef<OrderDialogComponent>
  ) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      trackingNumber: ['', Validators.required],
      receiver: ['', Validators.required],
      pickupDate: ['', Validators.required],
      address: ['', Validators.required],
      paymentType: ['', Validators.required],
      price: ['', Validators.required],
      trackingStatus: ['', Validators.required]
    })
    //prefill data, if editing
    if (this.editData) {
      this.actionButton = 'Update'  //to change button name when editing
      this.orderForm.controls['trackingNumber'].setValue(this.editData.trackingNumber)
      this.orderForm.controls['receiver'].setValue(this.editData.receiver)
      this.orderForm.controls['pickupDate'].setValue(this.editData.pickupDate)
      this.orderForm.controls['address'].setValue(this.editData.address)
      this.orderForm.controls['paymentType'].setValue(this.editData.paymentType)
      this.orderForm.controls['price'].setValue(this.editData.price)
      this.orderForm.controls['trackingStatus'].setValue(this.editData.trackingStatus)
    }
  }

  createOrUpdateOrder() {
    if (this.orderForm.valid && this.actionButton === 'Save') {
      this.backendService.postOrder(this.orderForm.value)
        .subscribe({
          next: () => {
            alert('Order added successfully')
            this.orderForm.reset()
            this.dialogRef.close('save')
          },
          error: () => {
            alert("Error while adding the order")
          }
        })
    } else {
      this.backendService.putOrder(this.orderForm.value, this.editData.id)
        .subscribe({
          next: () => {
            alert('Order updated successfully')
            this.orderForm.reset()
            this.dialogRef.close('update')
          },
          error: () => {
            alert("Error while updating the order")
          },
        })
    }
  }
}
