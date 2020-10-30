import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'beneficios-component',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {

  url: string = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url;
  }


}
