import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemopComponent } from './demop/demop.component';
import { ArithmaticService } from './arithmatic.service';

@NgModule({
  declarations: [
    AppComponent,
    DemopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArithmaticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
              