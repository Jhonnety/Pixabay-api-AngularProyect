import { Component } from '@angular/core';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent {
  nombreImagen="";

  constructor(private _imagenService: ImagenService){
  }

  buscarImagen(){

 if(this.nombreImagen ===""){
      this._imagenService.setError('Agrega un texto de busqueda');
      return;
  }
  this._imagenService.enviarTerminoBusqueda(this.nombreImagen);
    
  }
}
