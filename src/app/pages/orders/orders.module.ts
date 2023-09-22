import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersStaticsComponent } from './orders-statics/orders-statics.component';
import { OrdersHomeComponent } from './orders-home/orders-home.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersViewComponent } from './orders-view/orders-view.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { DemoNgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { AddOrderComponent } from './add-order/add-order.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';







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
    NzRadioModule,
    NzGridModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzSwitchModule,
    NzCollapseModule,
    NzSelectModule,
    NzModalModule,
    NzDropDownModule,
    NzTableModule,
  ]
})
export class OrdersModule { }
