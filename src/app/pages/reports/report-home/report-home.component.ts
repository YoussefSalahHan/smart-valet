import { Component } from '@angular/core';

@Component({
  selector: 'app-report-home',
  templateUrl: './report-home.component.html',
  styleUrls: ['./report-home.component.scss']
})
export class ReportHomeComponent {

  data = [
    {
      date : '10 Dec 2023',
      income:"40000 SAR"
    },
    {
      date : '1 Dec 2023',
      income:"50000 SAR"
    },
    {
      date : '10 Feb 2023',
      income:"26000 SAR"
    },
    {
      date : '#1000',
      income:"28000 SAR"
    },
  ];
    

}
