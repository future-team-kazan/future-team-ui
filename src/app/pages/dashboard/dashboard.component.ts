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
    });

    this.chartData = [
      ['ru-sc', 100],
      ['ru-kr', 1],
      ['ru-2485', 2],
      ['ru-ar', 3],
      ['ru-nn', 4],
      ['ru-yn', 5],
      ['ru-ky', 6],
      ['ru-ck', 100],
      ['ru-kh', 8],
      ['ru-sl', 9],
      ['ru-ka', 10],
      ['ru-kt', 11],
      ['ru-ms', 12],
      ['ru-rz', 13],
      ['ru-sa', 14],
      ['ru-ul', 15],
      ['ru-om', 16],
      ['ru-ns', 17],
      ['ru-mm', 18],
      ['ru-ln', 19],
      ['ru-sp', 20],
      ['ru-ki', 21],
      ['ru-kc', 22],
      ['ru-in', 23],
      ['ru-kb', 24],
      ['ru-no', 25],
      ['ru-st', 26],
      ['ru-sm', 27],
      ['ru-ps', 28],
      ['ru-tv', 29],
      ['ru-vo', 30],
      ['ru-iv', 31],
      ['ru-ys', 32],
      ['ru-kg', 33],
      ['ru-br', 34],
      ['ru-ks', 35],
      ['ru-lp', 36],
      ['ru-2509', 37],
      ['ru-ol', 38],
      ['ru-nz', 39],
      ['ru-pz', 40],
      ['ru-vl', 41],
      ['ru-vr', 42],
      ['ru-ko', 43],
      ['ru-sv', 44],
      ['ru-bk', 45],
      ['ru-ud', 46],
      ['ru-mr', 47],
      ['ru-cv', 48],
      ['ru-cl', 49],
      ['ru-ob', 50],
      ['ru-sr', 51],
      ['ru-tt', 52],
      ['ru-to', 53],
      ['ru-ty', 54],
      ['ru-ga', 55],
      ['ru-kk', 56],
      ['ru-cn', 57],
      ['ru-kl', 58],
      ['ru-da', 59],
      ['ru-ro', 60],
      ['ru-bl', 61],
      ['ru-tu', 62],
      ['ru-ir', 63],
      ['ru-ct', 64],
      ['ru-yv', 65],
      ['ru-am', 66],
      ['ru-tb', 67],
      ['ru-tl', 68],
      ['ru-ng', 69],
      ['ru-vg', 70],
      ['ru-kv', 71],
      ['ru-me', 72],
      ['ru-ke', 73],
      ['ru-as', 74],
      ['ru-pr', 75],
      ['ru-mg', 76],
      ['ru-bu', 77],
      ['ru-kn', 78],
      ['ru-kd', 79],
      ['ru-ku', 80],
      ['ru-al', 81],
      ['ru-km', 82],
      ['ru-pe', 83],
      ['ru-ad', 84],
    ];

    this.chartOptions = {
      chart: {
        map: rusMap,
      },

      title: {
        text: 'Младенческая сметрность по регионам',
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
        minColor: '#1b9904',
        maxColor: '#990e0c',
      },
      series: [{
        name: 'Random data',
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
