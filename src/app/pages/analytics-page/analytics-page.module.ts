import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';
import {
  NbSelectModule,
  NbButtonModule,
  NbListModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { ChartjsLineComponent } from './chartjs-line.component';
import { EchartsLineComponent } from './echarts-line.component';

import { AnalyticsPageComponent } from './analytics-page.component';

const components = [
  ChartjsLineComponent,
  EchartsLineComponent,
];

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbSelectModule,
    NbButtonModule,
    NbListModule,
    FormsModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
  ],
  declarations: [
    AnalyticsPageComponent, ...components,
  ],
  providers: [
  ],
})
export class AnalyticsPageModule { }
