import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  
  transform(value: string, ...args: unknown[]): unknown {
    
    //se pone una imagen por defecto si es que esta vacia
    if (value.length ==0) {
      return 'assets/images/angular.png';
    }
    return value;
  }

  
  

}
