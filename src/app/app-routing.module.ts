import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';


const routes: Routes = [
    {   path: '', 
        loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule),
    }, 
  
];


@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
