import { Component } from '@angular/core';

@Component({
  selector: 'app-companies-view',
  templateUrl: './companies-view.component.html',
  styleUrls: ['./companies-view.component.scss']
})
export class CompaniesViewComponent {

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
