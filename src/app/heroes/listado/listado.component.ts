import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  hereos: string [] = ['Thor', 'Mujer Maravilla', 'Batman', 'Capitan America'];
  hereoBorrado: string = '';

  borrarHereo(){
   this.hereoBorrado = this.hereos.shift() || '';  
  }
}
