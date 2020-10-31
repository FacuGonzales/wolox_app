import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  _tecnologiasVisibles: number;
  
  techLiked: string[] = [];
  cantidadLike: number = 0;

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
      (resultado: Tecnologias[]) => {

        if(resultado){
          this.loading = false;

          this._tecnObtenidas = resultado;

          this.obtenerLikeds(this._tecnObtenidas);

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

  obtenerLikeds(techsObtenidas: Tecnologias[]){
    let _localStorage = JSON.parse(localStorage.getItem('tecnologías-favoritas'));
    if(_localStorage == null){
      _localStorage = [];
    }

    this.techLiked = _localStorage;
    this.cantidadLike = this.techLiked?.length; 

    techsObtenidas.forEach(r => r.liked = false)

    // Recorro todos los elementos que haya en techLiekd
    this.techLiked.forEach( t => {
      // Recorro todos los elementos que hata detro de resultado
      techsObtenidas.forEach( r => {
        // Compruebo si existe alguno igual

        if(t == r.tech){
          // Si hay, coloco su propiedad liked en true
          r.liked = true;  
        }
      });

    })
    this.completarListado(techsObtenidas)
  }

  completarListado(techsObtenidas: Tecnologias[]){
    this._listadoFiltrado = techsObtenidas;
    this._tecnologiasVisibles = this._listadoFiltrado.length;
  }


  filter(value){
    let listaActualziada = this._tecnObtenidas;

    if(value != ''){
      this._listadoFiltrado = listaActualziada.filter(
        tec => tec.type.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
      this._tecnologiasVisibles = this._listadoFiltrado.length;
    }else{
      this._listadoFiltrado = this._tecnObtenidas;
      this._tecnologiasVisibles = this._listadoFiltrado.length;
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

  
  liked(value){
    let index = this.techLiked.findIndex(e => e == value);
    if(index >= 0){
      this.techLiked.splice(index, 1);
    }else{
      this.techLiked.push(value);
    }

    this.cantidadLike = this.techLiked?.length;

    localStorage.setItem('tecnologías-favoritas', JSON.stringify(this.techLiked));
    this.obtenerLikeds(this._tecnObtenidas);
  }
}
