import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TecnologiasDataService } from '../services/tecnologias-data.service';

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  loading: boolean = false;

  tError: boolean = false;
  subscribes: Subscription[] = [];

  constructor(private tecnologiasData: TecnologiasDataService) { }

  ngOnInit(): void {
    this.obtenerLista();
  }

  ngOnDestroy(){
    this.subscribes.forEach(s => s.unsubscribe());
  }

  obtenerLista(){
    this.loading = true;

    this.subscribes.push(this.tecnologiasData.obtenerTodos().subscribe(
      resultado => {
        if(resultado){
          this.loading = false;
          console.log(resultado);
        }else{
          this.loading=false
          this.tError = true;
          setTimeout(() => {
              this.tError = false;
          }, 2000);
        }
      },err => {
        this.loading=false
          this.tError = true;
          setTimeout(() => {
              this.tError = false;
          }, 2000);
      }
    ))
  }
}
