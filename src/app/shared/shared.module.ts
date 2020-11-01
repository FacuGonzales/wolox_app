import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

import { LoadingComponent } from './loading';
import { NavComponent } from './nav';
import { SuccessComponent } from './success';
import { ErrorComponent } from './error';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedRoutingModule
  ],
  declarations: [
    LoadingComponent,
    NavComponent,
    SuccessComponent,
    ErrorComponent
  ],
  providers: [],
  exports: [
    LoadingComponent,
    NavComponent,
    SuccessComponent,
    ErrorComponent
  ]
})

export class SharedModule { }
