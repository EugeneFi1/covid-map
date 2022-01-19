import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-info',
  templateUrl: './total-info.component.html',
  styleUrls: ['./total-info.component.less']
})
export class TotalInfoComponent implements OnInit {
  constructor() { }

  public countries = [
    {
      country: 'Ukraine',
      countryCode: 'ua'
    },
    {
      country: 'USA',
      countryCode: 'us'
    },
    {
      country: 'Italy',
      countryCode: 'it'
    },
    {
      country: 'Australia',
      countryCode: 'au'
    },
    {
      country: 'Poland',
      countryCode: 'pl'
    },
  ];

  ngOnInit(): void {
  }

}
