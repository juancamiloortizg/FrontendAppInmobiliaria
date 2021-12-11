import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoPackage: any = require("cryptojs");

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

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
  }

  IdentificarUsuario() {
    let usuario = this.fgValidator.controls["usuario"].value;
    let clave = this.fgValidator.controls["clave"].value;
    let claveCifrada = cryptoPackage.MD5(clave).toString();
    let ident = this.servicioSeguridad.IdentificarAdministrador(usuario, claveCifrada).subscribe((datos: any) => {
      alert("Correcto");
    }, (error: any) => {
      alert("Incorrecto.");
    })
  }

}
