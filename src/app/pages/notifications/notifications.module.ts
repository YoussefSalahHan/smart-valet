import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsHomeComponent } from './notifications-home/notifications-home.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { NotificationsAddComponent } from './notifications-add/notifications-add.component';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';



@NgModule({
  declarations: [
    NotificationsHomeComponent,
    NotificationsListComponent,
    NotificationsAddComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzPaginationModule,
    NzModalModule,
    NzSelectModule,
    NzInputModule
  ]
})
export class NotificationsModule { }
