import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(no1: number, no2: number): number 
  {
    return no1*no2
  }

}
