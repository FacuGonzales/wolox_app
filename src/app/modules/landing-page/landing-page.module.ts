import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { LandingPageRoutingModule } from './landing-page-routing.module';

import { LandingPageComponent } from './landing-page.component';
import { HomeComponent,
         InicioComponent,
         BeneficiosComponent,
         FooterComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule
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
