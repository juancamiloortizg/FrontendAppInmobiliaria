import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ListadoInmueblesComponent } from './plantilla/listado-inmuebles/listado-inmuebles.component';
import { OpcionesIngresoComponent } from './plantilla/opciones-ingreso/opciones-ingreso.component';
import { OpcionesRegistroComponent } from './plantilla/opciones-registro/opciones-registro.component';
import { PoliticaPrivacidadComponent } from './plantilla/politica-privacidad/politica-privacidad.component';
import { SobreNosotrosComponent } from './plantilla/sobre-nosotros/sobre-nosotros.component';
import { TerminosComponent } from './plantilla/terminos/terminos.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path: "",
    component: InicioComponent
  },
  {
  path: "seguridad",
  loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: "administracion",
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
    },
    {
      path: "solicitud",
      loadChildren: () => import("./modulos/solicitud/solicitud.module").then(x => x.SolicitudModule)
      },
      {
        path: "opciones-registro",
        component: OpcionesRegistroComponent
      },
      {
        path: "listado-inmuebles",
        component: ListadoInmueblesComponent
      },
      {
        path: "politica-privacidad",
        component: PoliticaPrivacidadComponent
      },
      {
        path: "sobre-nosotros",
        component: SobreNosotrosComponent
      },
      {
        path: "terminos",
        component: TerminosComponent
      },
      {
        path: "opciones-ingreso",
        component: OpcionesIngresoComponent
      },
      {
      path:"**",
      component: ErrorComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
