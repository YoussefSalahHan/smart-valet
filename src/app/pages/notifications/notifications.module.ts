import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsHomeComponent } from './notifications-home/notifications-home.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { NotificationsAddComponent } from './notifications-add/notifications-add.component';



@NgModule({
  declarations: [
    NotificationsHomeComponent,
    NotificationsListComponent,
    NotificationsAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotificationsModule { }
