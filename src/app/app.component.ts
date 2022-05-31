import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'order-management-system';

  constructor(private dialog: MatDialog) { }

  openOrderDialog() {
    this.dialog.open(OrderDialogComponent, { width: '30%' });
  }
}
