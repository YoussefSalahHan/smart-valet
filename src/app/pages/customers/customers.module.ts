import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersRoutingModule } from './customers-routing.module';

import { DemoNgZorroAntdModule } from "src/app/ng-zorro-antd.module";



@NgModule({
  declarations: [
    CustomersHomeComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class CustomersModule { }
