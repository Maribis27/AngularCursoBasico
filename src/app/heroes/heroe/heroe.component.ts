import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Mujer Maravilla';
    edad  : number = 45;

    //Retornar el nombre capitalizado
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${ this.nombre } - ${this.edad}`;
    }

    //Enlazando en una sola via- one way data bindling
    cambiarNombre(): void {
        this.nombre = 'Batman';
    }

    cambiarEdad(): void {
        this.edad = 90;
    }
    

}