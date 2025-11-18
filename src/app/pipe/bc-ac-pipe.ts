import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bCAC'
})
  export class BCACPipe implements PipeTransform {

    transform(d:String): String {
      let t=d.split("-")[0];
      let year:number
      if(t==""){
        year=-Number(d.split("-")[1])

      }
      else{
        year=Number(d.split("-")[0])
      }
      if(year<0){
        return Math.abs(year )+" B.C"    
      }
      else{
        return Number(year)+" A.C"  
        
      }
        
    }

  }
