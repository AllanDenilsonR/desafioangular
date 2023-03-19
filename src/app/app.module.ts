import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DomModule } from './dom/dom.module';
import { MenuComponent } from './dom/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    DomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
