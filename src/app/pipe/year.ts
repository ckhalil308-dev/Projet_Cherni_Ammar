import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
  export class year implements PipeTransform {
     transform(date:  Date): Number {
    const d = new Date(date);
    const year = d.getFullYear();          
    return year;
  }
  }