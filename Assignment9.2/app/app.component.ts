import { Component } from '@angular/core';
import { NumberService } from './number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  num=23
  chkprime:boolean
  
  constructor(public numberservice:NumberService)
  {
    this.chkprime=this.numberservice.chkprime(this.num)
  }
}
