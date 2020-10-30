import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inicio-component',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  url: string = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url;
  }

}
