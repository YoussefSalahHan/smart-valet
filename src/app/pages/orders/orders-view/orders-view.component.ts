import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent {
  isVisible = false;
  orderArrowOpened = false;
  openPaymentStatusFlag = false;

  openQRCodeModal(){
    this.isVisible = true;
  }

  handleOk(){
    this.isVisible = false;
    this.openPaymentStatusFlag = false;
  }

  handleCancel(){
    this.isVisible = false;
    this.openPaymentStatusFlag = false;
  }

  openPaymentStatus(){
    this.openPaymentStatusFlag = true;
  }
}
