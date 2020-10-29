import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoUserGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(){
    let token = localStorage.getItem('token-wolox')

    if(!token){
      return true;
    }else{
      this.router.navigate(['/listado']);
      return false;
    }
  }
}