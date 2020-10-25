import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  LandingPageModule } from './components';
         

@NgModule({
    declarations: [
        AppComponent,
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LandingPageModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        
    ]
})
export class AppModule { }
