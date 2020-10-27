import { Component, OnInit } from '@angular/core';
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

    constructor() { }

    ngOnInit(): void {
        this.obtenerToken();
    }

    obtenerToken(){
        this.token = localStorage.getItem('token-wolox')
    }

    viewMobile(){
        if(this.viewButton){
            this.viewButton = false;
        }else{
            this.viewButton = true;
        };
    }
}
