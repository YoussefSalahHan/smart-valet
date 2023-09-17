import { Component } from '@angular/core';

@Component({
  selector: 'app-view-branch',
  templateUrl: './view-branch.component.html',
  styleUrls: ['./view-branch.component.scss']
})
export class ViewBranchComponent {
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
