import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterPageComponent } from './page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

  ],
  declarations: [
    RegisterPageComponent
  ],
  providers: [],
})

export class RegisterPageModule { }
