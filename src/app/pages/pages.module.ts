import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {TestPageModule} from './test-page/test-page.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {SettingsPageModule} from './settings-page/settings-page.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    TestPageModule,
    DashboardModule,
    SettingsPageModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
