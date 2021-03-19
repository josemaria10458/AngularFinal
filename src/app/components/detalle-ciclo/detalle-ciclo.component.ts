import { element } from 'protractor';
import { CiclosInterfaz } from 'src/app/utils/CiclosInterfaz';
import { Asignaturas } from './../../utils/Asignatura';
import { CiclosService } from 'src/app/services/ciclos.service';
import { AsignaturasService } from './../../services/asignaturas.service';
import { AsignaturasInterfaz } from 'src/app/utils/AsignaturasInterfaz';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-detalle-ciclo',
  templateUrl: './detalle-ciclo.component.html',
  styleUrls: ['./detalle-ciclo.component.css']
})
export class DetalleCicloComponent implements OnInit {

  asignaturas:AsignaturasInterfaz[]=[];
  ciclos:CiclosInterfaz[] =[];
  conocimientos:any[]=[];
  numero:number=0;
  nombreCiclo:string="";
  imagenGrado:string="";
  
  constructor(private servicioAsignaturas:AsignaturasService, 
    private servicioCiclos:CiclosService,
    private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.numero=this.rutaActiva.snapshot.params.curso;
    this.nombreCiclo=this.rutaActiva.snapshot.params.ciclo;
    this.asignaturas=this.servicioAsignaturas.getAsignaturasFiltradas(this.numero,this.nombreCiclo);
    //primero recorres las asignaturas y luego sacas los conocimientos de estas
    this.asignaturas.forEach((element)=>{
      //añades los elementos 
      this.conocimientos.push(element.conocimientos);
    })

    this.ciclos=this.servicioCiclos.getAllCiclos();
    this.ciclos.forEach((element)=>{
      if (element.nombre.includes(this.nombreCiclo) && element.curso==this.numero) {
        this.imagenGrado=element.imagen;
      }  
      
    });
    
  }

  




}
