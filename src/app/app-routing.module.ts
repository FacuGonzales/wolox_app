import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { UserGuardService } from './services/user-guard.service';
import { NoUserGuardService } from './services/no-user-guard.service';

const defaultPathApp = '/';

const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule),
    
  },
  { path: 'register', 
    loadChildren: () => import('./modules/register-page/register-page.module').then(m => m.RegisterPageModule),
    canActivate: [NoUserGuardService]
  },
  { path: 'listado', 
    loadChildren: () => import('./modules/list-page/list-page.module').then(m => m.ListPageModule),
    canActivate: [UserGuardService]
  },
  {
    path: '**', redirectTo: defaultPathApp
  }

  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
