import {Component, OnInit} from '@angular/core';
import {PredictService} from 'app/models/services/predict.service';
import {ChartData, PredictParams} from 'app/models/data/predict-data';

@Component({
  selector: 'ngx-predict-page',
  templateUrl: './predict-page.component.html',
  styleUrls: ['./predict-page.component.scss'],
})
export class PredictPageComponent implements OnInit {
  predictService: any;
  chartData: ChartData;
  queryData: PredictParams;

  costs: any = [
    {
      name: 'Перенатальный центр',
      type: 'X1',
      cost: 10000000
    },
    {
      name: 'Больница',
      type: 'X2',
      cost: 11000000
    },
    {
      name: 'Персонал больницы',
      type: 'X3',
      cost: 12000000
    }];

  types: any = [
    {key: 'X1', value: 'Диагностическое и лечебное оборудование'},
    {key: 'X2', value: 'Медикаменты'},
    {key: 'X3', value: 'Квалифицированные кадры'},
    {key: 'X4', value: 'Расходы на  койка место / количество родившихся живыми'},
    {key: 'X5', value: 'Бюджет на транспорт / на плотность населения'},
    {key: 'Y1', value: 'Диагностическое и лечебное оборудование'},
    {key: 'Y2', value: 'Медикаменты'},
    {key: 'Y3', value: 'Квалифицированные кадры'},
    {key: 'Y4', value: 'Бюджет на транспорт / на плотность населения'},
  ];
  name: string;
  type: string;
  amount: number;

  constructor(private _dataSource: PredictService) {
    this.predictService = _dataSource;
  }

  buildPredictData(): void {
    this.costs.forEach(cost => {
      this.queryData[cost.type] += cost.cost;
    });
  }

  ngOnInit(): void {
    this.queryData = {
      REG: 'ru-kk',
      X1: 1543435342,
      X2: 2145345343,
      X3: 2343531,
      X4: 13242823,
      X5: 1765756245,
      Y1: 12476556,
      Y2: 1234887876865,
      Y3: 12386765678,
      Y4: 358667823,
    };

    this.calculatePredict();
  }

  calculatePredict(): void {
    this.predictService.getPredict(this.queryData).subscribe((data) => {
      data.datasets.map(function(item, i, arr) {
        const colors: any = ['#3b3eac', '#b77322'];
        // item.borderColor = colors[i % colors.length];
        Object.assign(item, { borderColor:  colors[i % colors.length] }, {fill: false} );
        return item;
      });
      this.chartData = data;
    });
  }

  addDataToList(name: string, type: string, amount: number): void {
    this.costs.push({name: name, type: type, cost: amount});
    this.buildPredictData();
    this.calculatePredict();
  }

}
