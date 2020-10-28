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

  tecnologiasForm = new FormControl();

  _tecnObtenidas: Tecnologias[] = [];
  _listadoFiltrado: Tecnologias[] = [];

  subscribes: Subscription[] = [];

  constructor(private tecnologiasData: TecnologiasDataService) { }

  ngOnInit(): void {
    this.obtenerLista();
    this.formSubscribes();
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

  order(value){
    let listaActualziada = this._tecnObtenidas;
    if(value == 'A'){
      this._listadoFiltrado.sort((a, b) => {
        if(a.tech > b.tech){
          return 1;
        }else if(a.tech < b.tech){
          return -1;
        }
        return 0
        
      })
    
    }else{
      this._listadoFiltrado.sort((a, b) => {
        if (a.tech > b.tech) {
            return -1;
        } else if (a.tech < b.tech) {
            return 1;
        }
        return 0
      })
    }
  }

  formSubscribes(){
    this.tecnologiasForm.valueChanges.subscribe(
      value => {
        let listaActualzada = this._tecnObtenidas;
        if(value){
          this._listadoFiltrado = listaActualzada.filter(
            tec => tec.tech.toLocaleLowerCase().includes(value.toLocaleLowerCase())
          )
        }else{
          this._listadoFiltrado = this._tecnObtenidas;
        }
      }
    )
  }
}
