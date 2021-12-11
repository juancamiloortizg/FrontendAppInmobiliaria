import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoPackage: any = require("crypto-js");

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

  email: string | undefined;
  password: string | undefined;

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
  }

  IdentificarUsuario() {
    let usuario = this.fgValidator.controls["usuario"].value;
    let clave = this.fgValidator.controls["clave"].value;
    let claveCifrada = cryptoPackage.MD5(clave).toString();
    console.log(claveCifrada);
    this.servicioSeguridad.IdentificarAdministrador(usuario, claveCifrada).subscribe((data: any) => {
      alert("Correcto");
    }, (error: any) => {
      alert("No");
    }, (complete: void) => {
      alert("Finish");
    });
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.servicioSeguridad.login(user).subscribe( data => {
      console.log(data);
      alert("OK")
    })
  }

}
