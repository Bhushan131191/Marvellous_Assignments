import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  txt: string= ''
  textlength: number=0

  Input()
  {
    this.textlength=this.txt.length
  }

  ngOnInit(): any {
    
  }
}
