import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterPageComponent } from './components';


@NgModule({
    imports: [
        CommonModule,
        RegisterPageRoutingModule,
        FormsModule,
        ReactiveFormsModule

    ],
    declarations: [
        RegisterPageComponent
    ],
    providers: [],
})
export class RegisterPageModule { }
