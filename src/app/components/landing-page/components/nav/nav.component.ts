import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  viewButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.viewButton){
      this.viewButton = false;
    }else{
      this.viewButton = true;
    };
  }
}
