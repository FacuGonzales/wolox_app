import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LandingPageComponent } from './landing-page.component';
import { HomeComponent,
         InicioComponent,
         BeneficiosComponent,
         FooterComponent } from './components';


@NgModule({
    declarations: [
        LandingPageComponent,
        HomeComponent,
        InicioComponent,
        BeneficiosComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
})
export class LandingPageModule { }
