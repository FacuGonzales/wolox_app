import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import {UserGuardService} from '../../services/user-guard.service';

@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  viewButton: boolean = false;
  token: string;

  @Input() cantidadLike?: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.obtenerToken();
    this.obtenerLikedsLS();
  }

  obtenerToken(){
    this.token = localStorage.getItem('token-wolox')
  }

  obtenerLikedsLS(){
    let techLiked: [] = JSON.parse(localStorage.getItem('tecnologías-favoritas'));
    if(techLiked == null){
      techLiked = [];
    };

    if(techLiked?.length != 0){
      this.cantidadLike = techLiked?.length;
    }
  }

  viewMobile(){
    if(this.viewButton){
      this.viewButton = false;
    }else{
      this.viewButton = true;
    };
  }

  navigateRouter(value){
    if(value == 'register' || value == 'listado'){
      this.router.navigate(['/'+value]);
    }else{
      this.router.navigate(['/'], { fragment: value });
    }
  }

}
