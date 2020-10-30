import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeneficiosComponent, HomeComponent, InicioComponent } from './components';
import { LandingPageComponent } from './landing-page.component';


const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
    children: [
      {
        path: 'home', component: LandingPageComponent
      },
      {
        path: 'inicio', component: InicioComponent
      },
      {
        path: 'beneficios', component: BeneficiosComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }