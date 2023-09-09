import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesHomeComponent } from './companies-home/companies-home.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesAddComponent } from './companies-add/companies-add.component';
import { CompaniesEditComponent } from './companies-edit/companies-edit.component';
import { CompaniesViewComponent } from './companies-view/companies-view.component';



@NgModule({
  declarations: [
    CompaniesHomeComponent,
    CompaniesListComponent,
    CompaniesAddComponent,
    CompaniesEditComponent,
    CompaniesViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompaniesModule { }
