import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    viewButton: boolean = false;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    viewMobile(){
        if(this.viewButton){
            this.viewButton = false;
        }else{
            this.viewButton = true;
        };
    }

    register(){
        this.router.navigate(['/register']);
    }
}
