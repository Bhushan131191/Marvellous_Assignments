import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform 
{

  transform(value:number,type:string):string
  {
    switch(type)
    {
      case 'Prime':
        return this.chkprime(value) ? 'Is a prime number':'Not a prime number'
      case 'Perfect':
        return this.chkperfect(value) ? 'Is a perfect Number':'Not a perfect number'
      case 'Even':
        return value % 2 === 0 ? 'Is an even number':'Not an even number'
      case 'Odd':
        return value % 2 !== 0 ? 'Is an odd number':'Not an odd number'
      default:
        return 'Invalid type'
    }
  }
  public chkprime(no:number):boolean
  {
    if (no <= 1)
    {
      return false
    }
    for (let i=2;i<no;i++)
    {
     if(no % i === 0)
     {
      return false
     } 
    }
    return true
  }
  public chkperfect (num:number):boolean
  {
    let sum=0
    for (let i=1;i<=num/2;i++)
    {
      if (num % i === 0)
      {
        sum += i
      }
    }
    return sum === num
  }
}