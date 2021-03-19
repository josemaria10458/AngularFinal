
import { element } from 'protractor';
import { AsignaturasInterfaz } from './../../utils/AsignaturasInterfaz';
import { AsignaturasService } from './../../services/asignaturas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignaturas:AsignaturasInterfaz[] =[];
  conocimientos:any[]=[];
  nombreFiltrado:string="";
  cicloFiltrado:string="";
  conocimientoFiltrado:string="";
  listaFiltrada:AsignaturasInterfaz[] = [];
  contador:number=0;

  constructor(private servicioAsignaturas:AsignaturasService) { }

  ngOnInit(): void {
    this.asignaturas =this.servicioAsignaturas.getAllAsignaturas();//traemos todas las asignaturas para luego filtrarlas
    this.asignaturas.forEach((element) => {
      return this.conocimientos.push(element.conocimientos);
    });
    this.listaFiltrada =this.asignaturas;//la igualamos para poder añadir 
    this.contador =this.listaFiltrada.length;
  }

  filtrar(nombre:string,ciclo:string,conocimiento:string){

    this.nombreFiltrado=nombre;
    this.cicloFiltrado=ciclo;
    this.conocimientoFiltrado=conocimiento;
    this.listaFiltrada=[];

    if (nombre == "" && ciclo == "" && conocimiento == "") {
      this.listaFiltrada=this.asignaturas;//se limpia la lista cada vez q se filtra
      this.contador=this.listaFiltrada.length;//se cuentan el numero de cartas

    }else if (nombre != "" && ciclo == "" && conocimiento == "") {
      this.listaFiltrada = this.servicioAsignaturas.getFiltroNombreFiltrado(this.nombreFiltrado);
      this.contador=this.listaFiltrada.length;

    }else if (nombre == "" && ciclo != "" && conocimiento == "") {
      this.listaFiltrada = this.servicioAsignaturas.getFiltroCicloFiltrado(this.cicloFiltrado);
      this.contador=this.listaFiltrada.length;


    }else if (nombre == "" && ciclo == "" && conocimiento != "") {
      this.asignaturas.forEach((element)=>{
        element.conocimientos.forEach((elementDos)=>{
          if (elementDos.nombre == this.conocimientoFiltrado.toLowerCase()) {
            this.listaFiltrada.push(element);
          }
        });
      });
      this.contador=this.listaFiltrada.length;

    }else if (nombre != "" && ciclo != "" && conocimiento != "") {
      this.asignaturas.forEach((element)=>{
        element.conocimientos.forEach((elementDos)=>{
          if (elementDos.nombre == this.conocimientoFiltrado.toLowerCase() && element.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase()) && element.ciclo.toLowerCase().includes(this.cicloFiltrado.toLowerCase())) {
            this.listaFiltrada.push(element);
          }
        });
      });
      this.contador=this.listaFiltrada.length;
    
    }else if(nombre != "" && ciclo != "" && conocimiento == ""){
      this.asignaturas.forEach((element)=>{
        if (element.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase()) && element.ciclo.toLowerCase().includes(this.cicloFiltrado.toLowerCase())) {
          this.listaFiltrada.push(element);
        }
      });
    }else if(nombre == "" && ciclo != "" && conocimiento != ""){
      this.asignaturas.forEach((element)=>{
        element.conocimientos.forEach((elementDos)=>{
          if (element.ciclo== this.cicloFiltrado.toLowerCase() && elementDos.nombre.toLowerCase().includes(this.conocimientoFiltrado.toLowerCase())) {
            this.listaFiltrada.push(element);
          }
        });
      });
    }else if(nombre != "" && ciclo == "" && conocimiento != ""){
      this.asignaturas.forEach((element)=>{
        element.conocimientos.forEach((elementDos)=>{
          if (element.nombre== this.conocimientoFiltrado.toLowerCase() && element.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase())) {
            this.listaFiltrada.push(element);
          }
        });
      });  
      /* ***************** */
    }else if(nombre != "" && ciclo == "" && conocimiento != ""){
    this.asignaturas.forEach((element)=>{
      element.conocimientos.forEach((elementDos)=>{
        if (element.nombre== this.conocimientoFiltrado.toLowerCase() && element.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase())) {
          this.listaFiltrada.push(element);
        }
      });
    });  
}      
}
}
