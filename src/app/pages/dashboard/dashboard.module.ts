import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { HighchartsChartModule } from 'highcharts-angular';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    HighchartsChartModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
  ],
})
export class DashboardModule { }
