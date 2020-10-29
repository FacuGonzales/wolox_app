import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs' 
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})

export class RegisterDataService {

  constructor(public http: HttpClient) { }

  register(userRegister: Register): Observable<any>{
    let url = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup'

    let params = JSON.stringify(userRegister);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, params, {headers: headers});
  } 
}
