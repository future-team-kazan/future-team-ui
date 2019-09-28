import {Component, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

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
  styleUrls: ['./statistics-page.component.scss'],
})
export class StatisticsPageComponent implements OnInit {
  data: any;

  factors: string[] = ['Показатель смертности', 'Показатель рождаемости'];
  regions: string[] = ['Ленинградская область', 'Ульяновская область', 'Республика Татарстан', 'Московская область'];
  requests: StatPageComponent[] = [];

  themeSubscription: any;
  colors: any = ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00', '#b82e2e',
    '#316395', '#3366cc', '#994499', '#22aa99', '#aaaa11', '#6633cc', '#e67300', '#8b0707', '#651067', '#329262',
    '#5574a6', '#3b3eac', '#b77322', '#16d620', '#b91383', '#f4359e', '#9c5935', '#a9c413', '#2a778d', '#668d1c',
    '#bea413', '#0c5922', '#743411'];
  chartjs: any;

  queryData(factor: string, region: string) {
    var dataNew: any = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        data: [165, 159, 180, 181, 156, 155, 140],
        label: 'Series D',
        fill: false,
        // borderColor: colors.primary,
      }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series E',
        fill: false,
        // borderColor: colors.danger,
      }, {
        data: [18, 48, 77, 9, 100, 27, 40],
        label: 'Series F',
        fill: false,
        // borderColor: colors.info,
      },
      ],
    };
    for (var i: number = 0; i < dataNew.length; i++) {
      dataNew[i].borderColor = this.colors[i % this.colors.length];
      console.log(dataNew[i]);
    }
    this.data = dataNew;
    // this.data.datasets = this.data.datasets.map(function(item, i, arr) {
    //   item.borderColor = this.colors[i % this.colors.length];
    //   console.log(item);
    //   return item;
    // });
    this.requests.push(new StatPageComponent(factor, region));
  }

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      // this.colors = config.variables;
      this.chartjs = config.variables.chartjs;
    });
  }

  ngOnInit(): void {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: false,
        // pointStyle: 'triangle',
        // showLine: false,
        // radius: 5,
        // borderColor: colors.primary,
      }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        fill: false,
        // borderColor: colors.danger,
      }, {
        data: [18, 48, 77, 9, 100, 27, 40],
        label: 'Series C',
        fill: false,
        // borderColor: colors.info,
      },
      ],
    };
    // this.data.datasets.forEach(function(item, i, arr) {
    //   item.borderColor = this.colors[i % this.colors.length];
    //   // return dataSet;
    // });
  }
}
