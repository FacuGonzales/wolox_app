import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { RegisterPageComponent } from './components';


@NgModule({
    imports: [
        RegisterPageRoutingModule
    ],
    declarations: [
        RegisterPageComponent
    ],
    providers: [],
})
export class RegisterPageModule { }
