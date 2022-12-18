import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  texto="";
  mostrar=false;
suscripcion: Subscription;

  constructor(private _imagenService:ImagenService){
    this.suscripcion=this._imagenService.getError().subscribe(notificaciones=>{
      this.texto=notificaciones;
      this.mostrarMensaje();
    });
  }
  mostrarMensaje(){
    this.mostrar=true;
    setTimeout(()=>{
      this.mostrar=false;
    },3000);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.suscripcion.unsubscribe();
    
  }

}
