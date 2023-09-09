import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersListComponent } from './customers-list/customers-list.component';



@NgModule({
  declarations: [
    CustomersHomeComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
