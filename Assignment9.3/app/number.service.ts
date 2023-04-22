import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{

  chkprime(no1:number):boolean
  {
    if(no1 <= 1)
    {
      return false
    }
    for (let i=2;i<no1;i++)
    {
      if (no1 % i ===0)
      {
        return false
      }
    }
    return true
  }
}
