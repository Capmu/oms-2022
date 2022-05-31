import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {

  displayColums = ['Picked up', 'On delivery', 'Recevied', 'Payment Success']
  orderForm !: FormGroup

  constructor(private formBuilder: FormBuilder) { }

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
    console.log(this.orderForm.value)
  }

}