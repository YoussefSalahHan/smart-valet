import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesHomeComponent } from './companies-home/companies-home.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesAddComponent } from './companies-add/companies-add.component';
import { CompaniesEditComponent } from './companies-edit/companies-edit.component';
import { CompaniesViewComponent } from './companies-view/companies-view.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { DemoNgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';




@NgModule({
  declarations: [
    CompaniesHomeComponent,
    CompaniesListComponent,
    CompaniesAddComponent,
    CompaniesEditComponent,
    CompaniesViewComponent
  ],
  imports: [
    CommonModule,
    DemoNgZorroAntdModule,
    CompaniesRoutingModule,
    NzCollapseModule,
    NzGridModule,
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzInputModule,
    NzRadioModule
  ]
})
export class CompaniesModule { }
