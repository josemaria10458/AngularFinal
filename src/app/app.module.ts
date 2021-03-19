import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { DetalleCicloComponent } from './components/detalle-ciclo/detalle-ciclo.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ImagesPipe } from './pipe/images.pipe';
import { TextoUpperCasePipe } from './pipe/texto-upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsignaturasComponent,
    CiclosComponent,
    AsignaturaComponent,
    DetalleCicloComponent,
    NavBarComponent,
    ImagesPipe,
    TextoUpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
