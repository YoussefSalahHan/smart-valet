import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersStaticsComponent } from './orders-statics/orders-statics.component';
import { OrdersHomeComponent } from './orders-home/orders-home.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersViewComponent } from './orders-view/orders-view.component';



@NgModule({
  declarations: [
    OrdersStaticsComponent,
    OrdersHomeComponent,
    OrdersListComponent,
    OrdersViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
