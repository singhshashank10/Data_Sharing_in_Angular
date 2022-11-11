import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';
import { Input2Component } from './input2/input2.component';
import { Display2Component } from './display2/display2.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisplayComponent,
    Input2Component,
    Display2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
