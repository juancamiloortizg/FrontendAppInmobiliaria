import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://127.0.0.1:3000';
  constructor(private http: HttpClient) { }


  IdentificarAdministrador(usuario: string, clave: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarAdministrador`, {
      usuario: usuario,
      clave: clave
    }, {
      headers: new HttpHeaders({

      })
    })
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.url}/identificarAdministrador`, user);
  }

}
