import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
   fun()

  {
    return "Marvellous Infosystem"
  }

  title = 'Assignment7';

  Data = "__________"

  public Myaction()
  {
    this.Data = "Marvellous Infosystems: Educating for better tomorrow..."
  }

  public MyActionNew(value:any)
  {
    console.log(value)
  }

  message: string='_____'

  displayUpperCase() 
  {
    this.message = 'MARVELLOUS INFOSYSTEMS'
  }

  displayLowerCase() 
  {
    this.message = 'marvellous infosystems';
  }
}
