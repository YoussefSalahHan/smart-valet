import { Component } from '@angular/core';

@Component({
  selector: 'app-companies-add',
  templateUrl: './companies-add.component.html',
  styleUrls: ['./companies-add.component.scss']
})
export class CompaniesAddComponent {
  loading = false;
  avatarUrl?: string;

}
