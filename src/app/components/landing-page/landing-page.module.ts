import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LandingPageComponent } from './landing-page.component';
import { NavComponent,
         HomeComponent,
         InicioComponent,
         BeneficiosComponent,
         FooterComponent } from './components';


@NgModule({
    declarations: [
        LandingPageComponent,
        NavComponent,
        HomeComponent,
        InicioComponent,
        BeneficiosComponent,
        FooterComponent,
        
    ],
    imports: [
        BrowserModule,
        
    ],
    providers: [],
})
export class LandingPageModule { }
