import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { BuscarImagenComponent } from './components/buscar-imagen/buscar-imagen.component';
import { ListarImagenComponent } from './components/listar-imagen/listar-imagen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './shared/error/error.component';
import { SppinerComponent } from './shared/sppiner/sppiner.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarImagenComponent,
    ListarImagenComponent,
    NavbarComponent,
    ErrorComponent,
    SppinerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
