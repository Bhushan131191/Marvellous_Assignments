import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demop',
  templateUrl: './demop.component.html',
  styleUrls: ['./demop.component.css']
})
export class DemopComponent 
{
  additionresult:number
  substractionresult:number

  constructor(public arithmatic:ArithmaticService)
  {
    this.additionresult=this.arithmatic.add(10,5)
    
    this.substractionresult=this.arithmatic.sub(10,5)
  }
 
}
