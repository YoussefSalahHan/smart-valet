import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersStaticsComponent } from './orders-statics/orders-statics.component';
import { OrdersHomeComponent } from './orders-home/orders-home.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersViewComponent } from './orders-view/orders-view.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { DemoNgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { AddOrderComponent } from './add-order/add-order.component';







@NgModule({
  declarations: [
    OrdersStaticsComponent,
    OrdersHomeComponent,
    OrdersListComponent,
    OrdersViewComponent,
    AddOrderComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    DemoNgZorroAntdModule,
  ]
})
export class OrdersModule { }
