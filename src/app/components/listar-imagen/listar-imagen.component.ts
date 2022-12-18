import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent {
termino ="";
suscripcion: Subscription;
listImagenes:any[]=[]
loading=false;
imagenesPorPagina=30;
paginaActual=1;
calcularTotalPagimas=0

  constructor(private _imagenService:ImagenService){
    this.suscripcion = this._imagenService.getTerminoBusqueda().subscribe(notificaciones=>{
      this.paginaActual=1;
      this.termino=notificaciones;
      this.loading=true;
      this.obtenerImagenes();
    });
  }
  obtenerImagenes(){
    this._imagenService.getImagenes(this.termino, this.imagenesPorPagina, this.paginaActual).subscribe(notificaciones =>{
      this.loading=false;
      this.listImagenes=notificaciones.hits; 
      console.log(notificaciones)
      if(notificaciones.hits.length === 0){
          this._imagenService.setError('Opss, no encontramos algun resultado');
          return;
      }
      this.calcularTotalPagimas=Math.ceil(notificaciones.totalHits / this.imagenesPorPagina );
    },error=>{
      this._imagenService.setError('Opss, ocurrio un error.');
      this.loading=false;
    });
  }

  paginaAnterior(){
    this.paginaActual--;
    this.loading= true;
    this.listImagenes=[];
    this.obtenerImagenes();
  }
  paginaSiguiente(){
    this.paginaActual++;
    this.loading= true;
    this.listImagenes=[];
    this.obtenerImagenes();
  }
  paginaAnteriorClass():boolean{
    if(this.paginaActual==1){
      return false;
    }else{
      return true;
    }

  }
  paginaSiguienteClass(){
    if(this.paginaActual==this.calcularTotalPagimas){
      return false;
    }else{
      return true;
    }
  }
}
