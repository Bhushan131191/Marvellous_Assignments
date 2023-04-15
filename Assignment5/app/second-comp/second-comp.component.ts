import { Component } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent 
{
  DisplayDetails()
  {
    return "Hello From Second Component"
  }

}
