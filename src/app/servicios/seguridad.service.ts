import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://127.0.0.1:3000';
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient, private cookies: CookieService) {
    this.VerificarSesionActual();
   }

  VerificarSesionActual() {
    let datos = this.ObtenerInformacionSesion();
    if(datos) {
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar) {
    this.datosUsuarioEnSesion.next(datos);
  }

  IdentificarAdministrador(usuario: string, clave: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarAdministrador`, {
      usuario: usuario,
      clave: clave
    }, {
      headers: new HttpHeaders({

      })
    })
  }

  ObtenerDatosUsuarioEnSesion() {
    return this.datosUsuarioEnSesion.asObservable();
  }

  loginAdministrador(user: any): Observable<any> {
    return this.http.post(`${this.url}/identificarAdministrador`, user);
  }

  loginAsesor(user: any): Observable<any> {
    return this.http.post(`${this.url}/identificarUsuario`, user);
  }

  loginCliente(user: any): Observable<any> {
    return this.http.post(`${this.url}/identificarClientes`, user);
  }

  registrarAdministrador(user: any): Observable<any> {
    return this.http.post(`${this.url}/administradores`, user);
  }

  AlmacenarSesion(datos: ModeloIdentificar) {
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion() {
    let datosString = localStorage.getItem("datosSesion");
    if(datosString) {
      let datos = JSON.parse(datosString);
      return datos;
    } else {
      return null;
    }
  }

  EliminarInformacionSesion() {
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  SeHaIniciadoSesion() {
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  setToken(token: any) {
    this.cookies.set("tk", token);
  }

  getToken() {
    return this.cookies.get("tk");
  }

}
