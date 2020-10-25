import { NgModule } from '@angular/core';

import { LandingPageRoutingModule } from './landing-page-routing.module';

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
        LandingPageRoutingModule
        
    ],
    providers: [],
})
export class LandingPageModule { }
