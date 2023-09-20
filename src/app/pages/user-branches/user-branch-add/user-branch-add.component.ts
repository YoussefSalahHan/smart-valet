import { Component } from '@angular/core';

@Component({
  selector: 'app-user-branch-add',
  templateUrl: './user-branch-add.component.html',
  styleUrls: ['./user-branch-add.component.scss']
})
export class UserBranchAddComponent {
  isVisibile = false;

  selectBranch(){
    this.isVisibile = true;
  }
  handleCancel(){
    this.isVisibile = false;
  }

  handleOk(){
    this.isVisibile = false;
  }

}
