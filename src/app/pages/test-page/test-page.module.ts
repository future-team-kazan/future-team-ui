import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { TestPageComponent } from './test-page.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
  ],
  declarations: [
    TestPageComponent,
  ],
  providers: [
  ],
})
export class TestPageModule { }
