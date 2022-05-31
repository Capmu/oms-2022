import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {

  displayColums = ['Picked up', 'On delivery', 'Recevied', 'Payment Success']

  constructor() { }

  ngOnInit(): void {
  }

}
