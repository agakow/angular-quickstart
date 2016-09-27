import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:     [ AppComponent ]
})

export class AppModule {}

// Entry point to the application
// root module needs to import the BrowserModule to the imports array because
// it is a web application tht runs in a browsers
