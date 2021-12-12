import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { IdentificacionClienteComponent } from './identificacion-cliente/identificacion-cliente.component';
import { IdentificacionAsesorComponent } from './identificacion-asesor/identificacion-asesor.component';
import { IdentificacionAdministradorComponent } from './identificacion-administrador/identificacion-administrador.component';
import { RegistroAsesorComponent } from './registro-asesor/registro-asesor.component';
import { RegistroAdministradorComponent } from './registro-administrador/registro-administrador.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';


@NgModule({
  declarations: [
    CambioClaveComponent,
    RecuperarClaveComponent,
    IdentificacionClienteComponent,
    IdentificacionAsesorComponent,
    IdentificacionAdministradorComponent,
    RegistroAsesorComponent,
    RegistroAdministradorComponent,
    RegistroClienteComponent,
    CerrarSesionComponent,
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
