import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modules';

         

@NgModule({
    declarations: [
        AppComponent,  
        NavComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        NavComponent
    ]
})
export class AppModule { }
