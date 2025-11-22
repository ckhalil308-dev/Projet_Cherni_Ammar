import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(n:number): string {
    let fullStars = Math.floor(n);
    let halfStar = n % 1 >= 0.5 ? 1 : 0;
    return '🌕'.repeat(fullStars) + '🌗'.repeat(halfStar) ;
  }

}
