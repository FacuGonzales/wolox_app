import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Tecnologias } from '../models/tecnologia';
import { TecnologiasDataService } from '../services/tecnologias-data.service';

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  
  loading: boolean = false;
  tError: boolean = false;

  _tecnObtenidas: Tecnologias[] = [];
  _listadoFiltrado: Tecnologias[] = [];

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
          this._tecnObtenidas = resultado;
          this._listadoFiltrado = this._tecnObtenidas;
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

  filter(value){
    let listaActualziada = this._tecnObtenidas;

    if(value != ''){
      this._listadoFiltrado = listaActualziada.filter(
        tec => tec.type.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    }else{
      this._listadoFiltrado = this._tecnObtenidas;
    }
  }

}
