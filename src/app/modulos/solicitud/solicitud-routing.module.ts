import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarSolicitudComponent } from './asignar-solicitud/asignar-solicitud.component';
import { BuscarSolicitudComponent } from './buscar-solicitud/buscar-solicitud.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './eliminar-solicitud/eliminar-solicitud.component';
import { EnviarSolicitudComponent } from './enviar-solicitud/enviar-solicitud.component';

const routes: Routes = [
  {
    path: "asignar-solicitud",
    component: AsignarSolicitudComponent
  },
  {
    path: "buscar-solicitud",
    component: BuscarSolicitudComponent
  },
  {
    path: "crear-solicitud",
    component: CrearSolicitudComponent
  },
  {
    path: "editar-solicitud",
    component: EditarSolicitudComponent
  },
  {
    path: "eliminar-solicitud",
    component: EliminarSolicitudComponent
  },
  {
    path: "enviar-solicitud",
    component: EnviarSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
