import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBranchesRoutingModule } from './user-branches-routing.module';
import { UserBranchesListComponent } from './user-branches-list/user-branches-list.component';
import { UserBranchAddComponent } from './user-branch-add/user-branch-add.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';



@NgModule({
  declarations: [
    UserBranchesListComponent,
    UserBranchAddComponent
  ],
  imports: [
    CommonModule,
    UserBranchesRoutingModule,
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzSwitchModule,
    NzCollapseModule,
    NzSelectModule,
    NzModalModule,
    NzDropDownModule,
    NzTableModule,
    NzTagModule,
    NzCheckboxModule
  ]
})
export class UserBranchesModule { }
