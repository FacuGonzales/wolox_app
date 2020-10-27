import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasDataService {

  constructor(public http: HttpClient) { }

  obtenerTodos(): Observable<any>{
    let url = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs'

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(url, {headers: headers});
  }
  
}
