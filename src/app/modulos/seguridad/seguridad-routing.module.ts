import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionAdministradorComponent } from './identificacion-administrador/identificacion-administrador.component';
import { IdentificacionAsesorComponent } from './identificacion-asesor/identificacion-asesor.component';
import { IdentificacionClienteComponent } from './identificacion-cliente/identificacion-cliente.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistroAdministradorComponent } from './registro-administrador/registro-administrador.component';
import { RegistroAsesorComponent } from './registro-asesor/registro-asesor.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

const routes: Routes = [
  {
    path:"cambio-clave",
    component: CambioClaveComponent
  },
  {
    path: "cerrar-sesion",
    component: CerrarSesionComponent
  },
  {
    path:"recuperar-clave",
    component: RecuperarClaveComponent
  },
  {
    path: "identificacion-administrador",
    component: IdentificacionAdministradorComponent
  },
  {
    path: "identificacion-asesor",
    component: IdentificacionAsesorComponent
  },
  {
    path: "identificacion-cliente",
    component: IdentificacionClienteComponent
  },
  {
    path: "registro-cliente",
    component: RegistroClienteComponent
  },
  {
    path: "registro-asesor",
    component: RegistroAsesorComponent
  },
  {
    path: "registro-administrador",
    component: RegistroAdministradorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
