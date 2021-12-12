import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor(private seguridadServicio: SeguridadService,
                    private router: Router) { }

  ngOnInit(): void {
    this.seguridadServicio.EliminarInformacionSesion();
    this.router.navigate(['/']);
  }

}
