import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent {
  constructor(private router: Router){

  }

  addCompany(){
    this.router.navigate(['branches/edit']);
  }

  onRowClick(){
    this.router.navigate(['companies/view/1']);
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
