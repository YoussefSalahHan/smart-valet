import { Component } from '@angular/core';

@Component({
  selector: 'app-companies-view',
  templateUrl: './companies-view.component.html',
  styleUrls: ['./companies-view.component.scss']
})
export class CompaniesViewComponent {
  isVisible = false;
  radioValue = 'A'; 
  showCompanyBranches = false;


  changeStatus(){
    this.isVisible = true;
  }

  changeCompanyStatus(){
    this.showCompanyBranches = true;
  }

  handleCancel(){
    this.isVisible = false;
    this.showCompanyBranches = false;

  }
  
  handleOk(){
    this.isVisible = false;
    this.showCompanyBranches = false;

  }

  panels = [
    {
      active: true,
      name: 'Company Info',
      disabled: false
    },
    {
      active: true,
      disabled: false,
      name: 'Company Manager Info'
    }
    ,
    {
      active: true,
      disabled: false,
      name: 'Branch Info'
    }
  ];

}
