import { Component } from '@angular/core';

export class StatPageComponent {

  constructor(
    public factor: string,
    public region: string,
    ) {
    }
}

@Component({
  selector: 'ngx-statistics-page',
  templateUrl: './statistics-page.component.html',
  /*styleUrls: ['./statistics-page.component.scss'],*/
})
export class StatisticsPageComponent {

  factors: string[] = ['Показатель смертности', 'Показатель рождаемости'];
  regions: string[] = ['Ленинградская область', 'Ульяновская область', 'Республика Татарстан', 'Московская область'];
  requests: StatPageComponent[] = [];
  queryData(factor: string, region: string) {
    this.requests.push(new StatPageComponent(factor, region));
  }
}
