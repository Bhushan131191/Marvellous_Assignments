import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService 
{
  add(No1:number,No2:number):number
  {
    return No1+No2
  }

  sub(No1:number,No2:number):number
  {
    return No1-No2
  }
}
