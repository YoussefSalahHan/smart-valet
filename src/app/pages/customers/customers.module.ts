import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';



@NgModule({
  declarations: [
    CustomersHomeComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NzCardModule,
    NzGridModule,
    NzTableModule,
    NzIconModule,
    NzDropDownModule,
  ]
})
export class CustomersModule { }
