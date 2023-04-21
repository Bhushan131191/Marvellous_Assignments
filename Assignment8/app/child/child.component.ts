import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  @Output() public event = new EventEmitter()
  
  public Message()
  {
    this.event.emit("Hello my dear Parent Component...")
  }


}
