import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component 
{
  str:string='BhUshan KADam'
  count:number=0

  constructor(public String:StringService)
  {
    this.count=this.String.countcapital(this.str)
  }

  str:string='BhUshan KADam'
  count:number=0

  constructor(public String:StringService)
  {
    this.count=this.String.countcapital(this.str)
  }

}
