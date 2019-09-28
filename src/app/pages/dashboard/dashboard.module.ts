import { NgModule } from '@angular/core';
import {
  NbCardModule, NbLayoutModule, NbSelectModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { HighchartsChartModule } from 'highcharts-angular';

import { DashboardComponent } from './dashboard.component';
import { MapService } from 'app/models/services/map.service';

@NgModule({
  imports: [
    NbCardModule,
    NbLayoutModule,
    NbSelectModule,
    ThemeModule,
    HighchartsChartModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    MapService,
  ],
})
export class DashboardModule { }
