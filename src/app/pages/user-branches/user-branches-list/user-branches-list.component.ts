import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-branches-list',
  templateUrl: './user-branches-list.component.html',
  styleUrls: ['./user-branches-list.component.scss']
})
export class UserBranchesListComponent {

  constructor(private router : Router){

  }

  addUserBranch(){
    this.router.navigate(['user-branches/add']);
  }

  listOfData = [
    {
      companyNo: '#1000',
      companyName: 'Ahmed',
      branchesNo: ' 3 Branches',
      city: 'Riyadh',
      icome: '1000 SAR',
      orders: '1000 Order',
      status: 'Active',
    },
    {
      companyNo: '#1000',
      companyName: 'Jula',
      branchesNo: ' 000',
      city: 'Maka',
      icome: '3000 SAR',
      orders: '4000 Order',
      status: 'Unactive',
    },
    {
      companyNo: '#1000',
      companyName: 'Ahmed',
      branchesNo: ' 3 Branches',
      city: 'Riyadh',
      icome: '1000 SAR',
      orders: '1000 Order',
      status: 'Active',
    },
    {
      companyNo: '#1000',
      companyName: 'Jula',
      branchesNo: ' 000',
      city: 'Maka',
      icome: '3000 SAR',
      orders: '4000 Order',
      status: 'Unactive',
    },
    {
      companyNo: '#1000',
      companyName: 'Ahmed',
      branchesNo: ' 3 Branches',
      city: 'Riyadh',
      icome: '1000 SAR',
      orders: '1000 Order',
      status: 'Active',
    },
    {
      companyNo: '#1000',
      companyName: 'Jula',
      branchesNo: ' 000',
      city: 'Maka',
      icome: '3000 SAR',
      orders: '4000 Order',
      status: 'Unactive',
    },
    {
      companyNo: '#1000',
      companyName: 'Ahmed',
      branchesNo: ' 3 Branches',
      city: 'Riyadh',
      icome: '1000 SAR',
      orders: '1000 Order',
      status: 'Active',
    },
    {
      companyNo: '#1000',
      companyName: 'Jula',
      branchesNo: ' 000',
      city: 'Maka',
      icome: '3000 SAR',
      orders: '4000 Order',
      status: 'Unactive',
    },
    {
      companyNo: '#1000',
      companyName: 'Ahmed',
      branchesNo: ' 3 Branches',
      city: 'Riyadh',
      icome: '1000 SAR',
      orders: '1000 Order',
      status: 'Active',
    },
    {
      companyNo: '#1000',
      companyName: 'Jula',
      branchesNo: ' 000',
      city: 'Maka',
      icome: '3000 SAR',
      orders: '4000 Order',
      status: 'Unactive',
    },
    {
      companyNo: '#1000',
      companyName: 'Ahmed',
      branchesNo: ' 3 Branches',
      city: 'Riyadh',
      icome: '1000 SAR',
      orders: '1000 Order',
      status: 'Active',
    },
    {
      companyNo: '#1000',
      companyName: 'Jula',
      branchesNo: ' 000',
      city: 'Maka',
      icome: '3000 SAR',
      orders: '4000 Order',
      status: 'Unactive',
    },
    {
      companyNo: '#1000',
      companyName: 'Ahmed',
      branchesNo: ' 3 Branches',
      city: 'Riyadh',
      icome: '1000 SAR',
      orders: '1000 Order',
      status: 'Active',
    },
    {
      companyNo: '#1000',
      companyName: 'Jula',
      branchesNo: ' 000',
      city: 'Maka',
      icome: '3000 SAR',
      orders: '4000 Order',
      status: 'Unactive',
    },
    {
      companyNo: '#1000',
      companyName: 'Ahmed',
      branchesNo: ' 3 Branches',
      city: 'Riyadh',
      icome: '1000 SAR',
      orders: '1000 Order',
      status: 'Active',
    },
    {
      companyNo: '#1000',
      companyName: 'Jula',
      branchesNo: ' 000',
      city: 'Maka',
      icome: '3000 SAR',
      orders: '4000 Order',
      status: 'Unactive',
    },
    {
      companyNo: '#1000',
      companyName: 'Ahmed',
      branchesNo: ' 3 Branches',
      city: 'Riyadh',
      icome: '1000 SAR',
      orders: '1000 Order',
      status: 'Active',
    },
    {
      companyNo: '#1000',
      companyName: 'Jula',
      branchesNo: ' 000',
      city: 'Maka',
      icome: '3000 SAR',
      orders: '4000 Order',
      status: 'Unactive',
    },
    {
      companyNo: '#1000',
      companyName: 'Ahmed',
      branchesNo: ' 3 Branches',
      city: 'Riyadh',
      icome: '1000 SAR',
      orders: '1000 Order',
      status: 'Active',
    },
    {
      companyNo: '#1000',
      companyName: 'Jula',
      branchesNo: ' 000',
      city: 'Maka',
      icome: '3000 SAR',
      orders: '4000 Order',
      status: 'Unactive',
    }
  ];

}
