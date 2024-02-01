import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  @Input() mostrarSaludo: boolean = true;
 nombre: string = "Sol";
 color: string = ''

 cambiarColor(nuevoColor: string): void {
  this.color = nuevoColor;
}
}
