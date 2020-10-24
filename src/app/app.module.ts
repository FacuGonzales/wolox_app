import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  NavComponent,
          LandingPageModule } from './components';
         

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LandingPageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
