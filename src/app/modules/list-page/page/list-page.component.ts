import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TecnologiasDataService } from '../services/tecnologias-data.service';

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  subscribes: Subscription[] = [];

  constructor(private tecnologiasData: TecnologiasDataService) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(){
    this.subscribes.forEach(s => s.unsubscribe());
  }

}
