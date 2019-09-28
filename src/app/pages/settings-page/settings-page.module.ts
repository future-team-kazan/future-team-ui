import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SettingsPageComponent } from './settings-page.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbInputModule,
  ],
  declarations: [
    SettingsPageComponent,
  ],
  providers: [
  ],
})
export class SettingsPageModule { }
