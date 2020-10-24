import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './components';


@NgModule({
    declarations: [
        LandingPageComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
})
export class LandingPageModule { }
