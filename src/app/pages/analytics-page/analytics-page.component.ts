import { Component } from '@angular/core';

export class StatPageComponent {

  constructor(
    public factor: string,
    public region: string,
    ) {
    }
}

export class AnalysisPageComponent {

  constructor(
    public name: string,
    public type: string,
    public amount: number,
    ) {
    }
}

@Component({
  selector: 'ngx-statistics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.scss'],
})
export class AnalyticsPageComponent {

  factors: string[] = ['Показатель смертности', 'Показатель рождаемости'];
  regions: string[] = ['Ленинградская область', 'Ульяновская область', 'Республика Татарстан', 'Московская область'];
  requests: StatPageComponent[] = [];
  data: AnalysisPageComponent[] = [];

  queryData(factor: string, region: string) {
    this.requests.push(new StatPageComponent(factor, region));
  }
  hospitalData(name: string, type: string, amount: number) {
    this.data.push(new AnalysisPageComponent(name, type, amount));
  }
}
