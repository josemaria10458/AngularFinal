export class Ciclos{
    constructor(private nombre: string, private curso:number,private imagen:string,private asignaturas:string){
        this.nombre = nombre;
        this.curso = curso;
        this.imagen = imagen;
        this.asignaturas = asignaturas;
    }

    public get getNombre():string{
        return this.nombre;
    }
    public get getCurso():number{
        return this.curso;
    }
    public get getImagen():string{
        return this.imagen;
    }
    public get getAsignaturas():string{
        return this.asignaturas;
    }
}