import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe';
import { PipedemoComponent } from './pipedemo/pipedemo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAddPipe,
    MyMultPipe,
    PipedemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
