import { Router, Routes } from '@angular/router';
import { AsignaturasService } from './../../services/asignaturas.service';
import { CiclosInterfaz } from './../../utils/CiclosInterfaz';
import { Component, OnInit } from '@angular/core';
import { AsignaturasInterfaz } from 'src/app/utils/AsignaturasInterfaz';
import { CiclosService } from 'src/app/services/ciclos.service';


@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  asignaturasDAM: AsignaturasInterfaz[] = [];
  asignaturasDAW: AsignaturasInterfaz[] = [];
  ciclos:CiclosInterfaz[] = [];
  ciclo="";
  curso="";
  

  

  constructor(private servicioAsignaturas:AsignaturasService, private servicioCiclos:CiclosService,private ruta:Router) { }

  ngOnInit(): void {
    this.asignaturasDAM = this.servicioAsignaturas.getAsignaturasFiltrar("DAM");//invocas al metodo donde vas a filtar
    this.asignaturasDAW = this.servicioAsignaturas.getAsignaturasFiltrar("DAW");
    this.ciclos = this.servicioCiclos.getAllCiclos();
  }

  pasarPantallaCiclo(rutaNav:string,ciclo:string,curso:number){
      //le pasas los elementos de cada ciclo
      this.ruta.navigate([rutaNav,ciclo,curso]);
  }


}
