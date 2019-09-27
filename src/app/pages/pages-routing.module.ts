import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { TestPageComponent } from './test-page/test-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

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
