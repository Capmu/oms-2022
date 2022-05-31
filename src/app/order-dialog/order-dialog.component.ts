import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {

  displayColums = ['Picked up', 'On delivery', 'Recevied', 'Payment Success']
  orderForm !: FormGroup

  constructor(
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
  }

  createOrder() {
    if (this.orderForm.valid) {
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
    }
  }

}
