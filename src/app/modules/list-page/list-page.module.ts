import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { ListPageRoutingModule } from './list-page-routing.module';
import { ListPageComponent } from './page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ListPageRoutingModule

  ],
  declarations: [
    ListPageComponent
  ],
  providers: [],
})

export class ListPageModule { }
