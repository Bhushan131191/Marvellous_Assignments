import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  num=15
  chkprime:boolean
  str:string='BhUshan KADam'
  count:number=0
  
  constructor(public numberservice:NumberService, public String:StringService)
  {
    this.chkprime=this.numberservice.chkprime(this.num)
  
    this.count=this.String.countcapital(this.str)
  }


}


