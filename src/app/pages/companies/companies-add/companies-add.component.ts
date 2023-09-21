import { Component } from '@angular/core';

@Component({
  selector: 'app-companies-add',
  templateUrl: './companies-add.component.html',
  styleUrls: ['./companies-add.component.scss']
})
export class CompaniesAddComponent {
  loading = false;
  avatarUrl?: string;
  isVisible = false;
  selectCompanyFlag = false;

  openSelectCompanyPopup(){
    this.selectCompanyFlag = true; 
  }

  changeStatus(){
    this.isVisible = true;
  }


  handleCancel(){
    this.isVisible = false;
    this.selectCompanyFlag = false;

  }
  
  handleOk(){
    this.isVisible = false;
    this.selectCompanyFlag = false;
  }


}
