import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-registro-administrador',
  templateUrl: './registro-administrador.component.html',
  styleUrls: ['./registro-administrador.component.css']
})
export class RegistroAdministradorComponent implements OnInit {

  nombres: string | undefined;
  apellidos: string | undefined;
  email: string | undefined;
  clave: string | undefined;

  constructor(public seguridadServicio: SeguridadService,
    public router: Router) { }

  ngOnInit(): void {
  }

  registrarAdministrador() {
    const user = { nombres: this.nombres, apellidos: this.apellidos, email: this.email, clave: this.clave, genero: "Masculino" };
    this.seguridadServicio.registrarAdministrador(user).subscribe(data => {
      this.seguridadServicio.setToken(data.token);
      // If it's redirected it's done the login
      this.router.navigateByUrl('/');
    },
    error => {
      alert("Incorrecto");
      console.log(error);
    })
  }

}
