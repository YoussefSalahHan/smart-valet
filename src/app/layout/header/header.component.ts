import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isVisible = false;

  constructor(private router:Router){

  }

  openProfile(){
    this.isVisible = true;
  }

  handleCancel(){
    this.isVisible = false;
  }
  
  handleOk(){
    this.isVisible = false;
  }

  openNotifications(){
    this.router.navigate(['notifications/list']);
  }

}
