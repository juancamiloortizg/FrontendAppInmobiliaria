import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { OpcionesRegistroComponent } from './plantilla/opciones-registro/opciones-registro.component';
import { ListadoInmueblesComponent } from './plantilla/listado-inmuebles/listado-inmuebles.component';
import { SobreNosotrosComponent } from './plantilla/sobre-nosotros/sobre-nosotros.component';
import { PoliticaPrivacidadComponent } from './plantilla/politica-privacidad/politica-privacidad.component';
import { TerminosComponent } from './plantilla/terminos/terminos.component';
import { OpcionesIngresoComponent } from './plantilla/opciones-ingreso/opciones-ingreso.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,
    OpcionesRegistroComponent,
    ListadoInmueblesComponent,
    SobreNosotrosComponent,
    PoliticaPrivacidadComponent,
    TerminosComponent,
    OpcionesIngresoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
