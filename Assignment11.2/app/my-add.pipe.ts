import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform 
{

  transform(no1: number, no2: number): number 
  {
    return no1+no2
  }

}


