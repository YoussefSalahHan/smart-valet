import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent {
  isVisible = false;
  constructor(private modalService: NzModalService){

  }

  addNewNotification(){
    this.isVisible = true;
  }

  handleCancel(){
    this.isVisible = false;
  }
  
  handleOk(){
    this.isVisible = false;
  }

}
