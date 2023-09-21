import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})

export class OrdersListComponent implements OnInit {
  sortPopupFlag = false;

  constructor(private router :  Router){

  }

  addOrder(){
    this.router.navigate(['orders/add']);
  }

  sort(){
    this.sortPopupFlag = true;
  }

  handleCancel(){
    this.sortPopupFlag = false;
  }

  handleOk(){
    this.sortPopupFlag = false;
  }
  

  listOfData = [
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    },
    {
      order_id: '#1000',
      date: '10 Dec 2023',
      customer: 'Mai Ahmed',
      checkin: '07:00 Am',
      checkout: '03:00 Pm',
      price: '40 SAR',
      payment: 'Paid',
      status: 'Car Parked',
    }
  ];

  ngOnInit() {
  }


}
