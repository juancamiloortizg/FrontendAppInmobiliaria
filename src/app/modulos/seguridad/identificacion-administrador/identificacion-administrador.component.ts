import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoPackage: any = require("crypto-js");
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion-administrador',
  templateUrl: './identificacion-administrador.component.html',
  styleUrls: ['./identificacion-administrador.component.css']
})
export class IdentificacionAdministradorComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });

  usuario: string | undefined;
  clave: string | undefined;

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    public router: Router) { }

  ngOnInit(): void {
  }

  loginAdministrador() {
    console.log(this.usuario + " | " + this.clave);
    const user = {usuario: this.usuario, clave: this.clave};
    this.servicioSeguridad.loginAdministrador(user).subscribe( data => {
      this.servicioSeguridad.setToken(data.token);
      this.servicioSeguridad.AlmacenarSesion(data);
      // If it's redirected it's done the login
      this.router.navigateByUrl('/');
    }, (error: any) => {
      console.log(error);
      alert("Datos no registrados.");
    } );
  }

}
