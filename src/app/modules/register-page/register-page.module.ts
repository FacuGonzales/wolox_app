import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterPageComponent } from './components';


@NgModule({
    imports: [
        CommonModule,
        RegisterPageRoutingModule,
    ],
    declarations: [
        RegisterPageComponent
    ],
    providers: [],
})
export class RegisterPageModule { }
