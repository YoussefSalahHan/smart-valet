import { Component } from '@angular/core';

@Component({
  selector: 'app-companies-view',
  templateUrl: './companies-view.component.html',
  styleUrls: ['./companies-view.component.scss']
})
export class CompaniesViewComponent {
  isVisible = false;
  radioValue = 'A'; 


  changeStatus(){
    this.isVisible = true;
  }

  handleCancel(){
    this.isVisible = false;
  }
  
  handleOk(){
    this.isVisible = false;
  }

  panels = [
    {
      active: true,
      name: 'Branch Info',
      disabled: false
    },
    {
      active: true,
      disabled: false,
      name: 'Branch User Info'
    }
  ];

}
