import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeneficiosComponent, HomeComponent, InicioComponent } from './components';
import { LandingPageComponent } from './landing-page.component';


const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
    children: [
      {
        path: '', component: LandingPageComponent
      },
      {
        path: '', component: InicioComponent
      },
      {
        path: '', component: BeneficiosComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }