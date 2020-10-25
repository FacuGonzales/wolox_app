import { NgModule } from '@angular/core';

import { LandingPageRoutingModule } from './landing-page-routing.module';

import { LandingPageComponent } from './landing-page.component';
import { HomeComponent,
         InicioComponent,
         BeneficiosComponent,
         FooterComponent } from './components';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module';

@NgModule({
    imports: [
        LandingPageRoutingModule,
        NavModule
    ],
    declarations: [
        LandingPageComponent,
        HomeComponent,
        InicioComponent,
        BeneficiosComponent,
        FooterComponent,
        
    ],
    
    providers: [],
})
export class LandingPageModule { }
