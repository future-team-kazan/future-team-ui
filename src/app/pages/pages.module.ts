import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {TestPageModule} from './test-page/test-page.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {SettingsPageModule} from './settings-page/settings-page.module';
import {StatisticsPageModule} from './statistics-page/statistics-page.module';
import {PredictPageModule} from 'app/pages/predicts/predict-page.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    TestPageModule,
    PredictPageModule,
    DashboardModule,
    SettingsPageModule,
    StatisticsPageModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
