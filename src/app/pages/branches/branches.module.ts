import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ViewBranchComponent } from './view-branch/view-branch.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BranchesListComponent } from './branches-list/branches-list.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';






@NgModule({
  declarations: [
    EditBranchComponent,
    ViewBranchComponent,
    BranchesListComponent
  ],
  imports: [
    CommonModule,
    BranchesRoutingModule,
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzSwitchModule,
    NzCollapseModule,
    NzInputModule,
    NzSelectModule,
    NzModalModule,
    NzDropDownModule,
    NzTableModule,
    NzTagModule
    
  ]
})
export class BranchesModule { }
