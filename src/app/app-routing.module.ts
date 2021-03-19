import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { DetalleCicloComponent } from './components/detalle-ciclo/detalle-ciclo.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'ciclos',component:CiclosComponent},
  {path:'detalleCiclo/:ciclo/:curso',component:DetalleCicloComponent},
  {path:'asignaturas',component:AsignaturasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
