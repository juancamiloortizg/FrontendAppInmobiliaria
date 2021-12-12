import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-identificacion-cliente',
  templateUrl: './identificacion-cliente.component.html',
  styleUrls: ['./identificacion-cliente.component.css']
})
export class IdentificacionClienteComponent implements OnInit {

  usuario: string | undefined;
  clave: string | undefined;

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    public router: Router) { }

  ngOnInit(): void {
  }

  loginCliente() {
    console.log(this.usuario + " | " + this.clave);
    const user = {usuario: this.usuario, clave: this.clave};
    this.servicioSeguridad.loginCliente(user).subscribe( data => {
      this.servicioSeguridad.setToken(data.token);
      this.servicioSeguridad.AlmacenarSesion(data);
      // If it's redirected it's done the login
      this.router.navigateByUrl('/');
    } );
  }

}
