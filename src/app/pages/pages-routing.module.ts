import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { TestPageComponent } from './test-page/test-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import {PredictPageComponent} from 'app/pages/predicts/predict-page.component';

// hint Rout-ы ангуляра
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'statistics-page',
      component: StatisticsPageComponent,
    },
    {
      path: 'predicts',
      component: PredictPageComponent,
    },
    {
      path: 'settings-page',
      component: SettingsPageComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
