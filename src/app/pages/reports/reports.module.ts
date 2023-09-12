import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportHomeComponent } from './report-home/report-home.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReportsRoutingModule } from './reports-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';







@NgModule({
  declarations: [
    ReportHomeComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    ReportsRoutingModule,
    NzButtonModule,
    NzListModule
  ]
})
export class ReportsModule { }
