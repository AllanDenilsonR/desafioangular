import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { CajaComponent } from './caja/caja.component';



@NgModule({
  declarations: [
    MenuComponent,
    CuerpoComponent,
    PiepaginaComponent,
    CajaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuComponent,
    CuerpoComponent,
    PiepaginaComponent,
    //CajaComponent
  ]
})
export class DomModule { }
