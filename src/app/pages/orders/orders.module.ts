import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersStaticsComponent } from './orders-statics/orders-statics.component';
import { OrdersHomeComponent } from './orders-home/orders-home.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersViewComponent } from './orders-view/orders-view.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReportsRoutingModule } from '../reports/reports-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTagModule } from 'ng-zorro-antd/tag';






@NgModule({
  declarations: [
    OrdersStaticsComponent,
    OrdersHomeComponent,
    OrdersListComponent,
    OrdersViewComponent,
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    ReportsRoutingModule,
    NzButtonModule,
    OrdersRoutingModule,
    NzListModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzDropDownModule,
    NzTagModule
  ]
})
export class OrdersModule { }
