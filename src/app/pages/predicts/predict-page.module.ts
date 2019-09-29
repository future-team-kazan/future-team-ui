import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule, NbListModule, NbSelectModule
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { PredictPageComponent } from './predict-page.component';
import {PredictService} from 'app/models/services/predict.service';
import {ChartjsLinePredictComponent} from 'app/pages/predicts/chartjs-line-predict.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'angular2-chartjs';
import {NgxEchartsModule} from 'ngx-echarts';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    NbCardModule,
    NbSelectModule,
    FormsModule,
    NbButtonModule,
    ThemeModule,
    NbListModule,
    NgxChartsModule,
    NgxEchartsModule,
    ChartModule,
  ],
  declarations: [
    PredictPageComponent,
    ChartjsLinePredictComponent,
  ],
  providers: [
    PredictService,
  ],
})
export class PredictPageModule { }
