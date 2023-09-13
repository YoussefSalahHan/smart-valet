import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportHomeComponent } from './report-home/report-home.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';






@NgModule({
  declarations: [
    ReportHomeComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    DemoNgZorroAntdModule

  ]
})
export class ReportsModule { }
