import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';
import { MapData } from 'app/models/data/map-data';
import { MapService } from 'app/models/services/map.service';

// import * as Highcharts from 'highcharts/highmaps';

const rusMap = require('@highcharts/map-collection/countries/ru/custom/ru-all-disputed.geo.json');

MapModule(Highcharts);

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['dashboard.component.css'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  dataSource: MapService;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  chartConstructor: any = 'mapChart';
  updateFlag: boolean = true;
  selectedYear: number;
  selectedType: string;

  years: number[];
  dataFromServer: MapData[];

  // паратры графика
  chartData: any;
  chartMax: any;

  constructor(private _dataSource: MapService) {
    this.dataSource = _dataSource;
  }

  ngOnInit(): void {
    this.dataSource.getAll().subscribe((data) => {
      this.dataFromServer = data;
      this.years = data.map(function(dataSet) { return dataSet.year});
      // this.chartData = data[0].deathrate;
    });

    this.chartData = [
      ['ru-sc', 0],
      ['ru-kr', 0],
      ['ru-2485', 0],
      ['ru-ar', 1],
      ['ru-nn', 0],
      ['ru-yn', 0],
      ['ru-ky', 1],
      ['ru-ck', 1],
      ['ru-kh', 0],
      ['ru-sl', 1],
      ['ru-ka', 0],
      ['ru-kt', 0],
      ['ru-ms', 1],
      ['ru-rz', 1],
      ['ru-sa', 1],
      ['ru-ul', 1],
      ['ru-om', 0],
      ['ru-ns', 0],
      ['ru-mm', 0],
      ['ru-ln', 1],
      ['ru-sp', 0],
      ['ru-ki', 1],
      ['ru-kc', 0],
      ['ru-in', 1],
      ['ru-kb', 1],
      ['ru-no', 0],
      ['ru-st', 1],
      ['ru-sm', 1],
      ['ru-ps', 1],
      ['ru-tv', 0],
      ['ru-vo', 1],
      ['ru-iv', 0],
      ['ru-ys', 1],
      ['ru-kg', 1],
      ['ru-br', 1],
      ['ru-ks', 1],
      ['ru-lp', 1],
      ['ru-2509', 1],
      ['ru-ol', 0],
      ['ru-nz', 1],
      ['ru-pz', 1],
      ['ru-vl', 0],
      ['ru-vr', 1],
      ['ru-ko', 0],
      ['ru-sv', 0],
      ['ru-bk', 1],
      ['ru-ud', 0],
      ['ru-mr', 0],
      ['ru-cv', 0],
      ['ru-cl', 1],
      ['ru-ob', 1],
      ['ru-sr', 1],
      ['ru-tt', 1],
      ['ru-to', 1],
      ['ru-ty', 0],
      ['ru-ga', 0],
      ['ru-kk', 1],
      ['ru-cn', 0],
      ['ru-kl', 1],
      ['ru-da', 1],
      ['ru-ro', 0],
      ['ru-bl', 1],
      ['ru-tu', 0],
      ['ru-ir', 0],
      ['ru-ct', 1],
      ['ru-yv', 0],
      ['ru-am', 0],
      ['ru-tb', 1],
      ['ru-tl', 0],
      ['ru-ng', 0],
      ['ru-vg', 0],
      ['ru-kv', 0],
      ['ru-me', 0],
      ['ru-ke', 0],
      ['ru-as', 0],
      ['ru-pr', 0],
      ['ru-mg', 0],
      ['ru-bu', 1],
      ['ru-kn', 1],
      ['ru-kd', 1],
      ['ru-ku', 1],
      ['ru-al', 1],
      ['ru-km', 0],
      ['ru-pe', 0],
      ['ru-ad', 0],
    ];

    this.chartOptions = {
      chart: {
        map: rusMap,
      },

      title: {
        text: 'Наличие перенатлаьных центров по регионам',
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          alignTo: 'spacingBox',
        },
      },
      legend: {
        enabled: true,
      },
      colorAxis: {
        min: 0,
        max: 1,
        minColor: '#990e0c',
        maxColor: '#1b9904',
      },
      series: [{
        name: 'Наличие перенатального центра',
        allAreas: false,
        states: {
          hover: {
            color: '#BADA55',
          },
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}',
        },
        data: this.chartData,
      } as Highcharts.SeriesMapOptions],
    };

  }

  parameterChanged($event: any): void {
    // console.log($event);
    // console.log(this.selectedYear);
    const year = this.selectedYear;
    // let year = this.selectedYear;

    // tslint:disable-next-line:no-console
    console.log(this.dataFromServer.filter(function(dataSet) {
      return dataSet.year === year;
    }));
    const filtered = this.dataFromServer.filter(function(dataSet) {
      return dataSet.year === year;
    });
    // tslint:disable-next-line:no-console
    console.log(this.chartData);
    // tslint:disable-next-line:no-console
    console.log(filtered[0].birthrate);
    this.chartData = filtered[0].birthrate;
    // this.chartOptions.series[0].data = this.chartData;
    // tslint:disable-next-line:no-console
    console.log(this.chartOptions);
    // this.chartData = this.dataFromServer.filter(function(dataSet) {
    //   console.log(dataSet.year);
    //   return dataSet.year === this.selectedYear;
    // })[0];
  }

}
