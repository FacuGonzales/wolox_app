import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LandingPageComponent } from './modules';


const routes: Routes = [
    {   path: '', 
        loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule),
    }, 
    {   path: 'register', 
        loadChildren: () => import('./modules/register-page/register-page.module').then(m => m.RegisterPageModule),
    }, 

  
];


@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
