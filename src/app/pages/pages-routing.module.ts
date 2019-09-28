import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { TestPageComponent } from './test-page/test-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';

// hint Rout-ы ангуляра
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'test-page',
      component: TestPageComponent,
    },
    {
      path: 'statistics-page',
      component: StatisticsPageComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
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
