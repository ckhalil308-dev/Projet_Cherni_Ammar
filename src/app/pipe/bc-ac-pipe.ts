import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bCAC'
})
  export class BCACPipe implements PipeTransform {
     transform(date:  Date): Number {
    const d = new Date(date);
    const year = d.getFullYear();          
    return year;
  }
  }