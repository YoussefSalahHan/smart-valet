import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isVisible = false;
  changePassword = false;
  passwordVisible = true;

  constructor(private router:Router){

  }

  openProfile(){
    this.isVisible = true;
  }

  handleCancel(){
    this.isVisible = false;
    this.changePassword = false;
  }
  
  handleOk(){
    this.isVisible = false;
    this.changePassword = false;

  }
  openChangePassword(){
    this.changePassword = true;
    this.isVisible = false;
  }


  openNotifications(){
    this.router.navigate(['notifications/list']);
  }

}
