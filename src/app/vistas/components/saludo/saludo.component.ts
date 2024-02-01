import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  @Input() mostrarSaludo: boolean = true;
  @Output() mostrarSaludoChange: EventEmitter<boolean> = new EventEmitter<boolean>();
 nombre: string = "Sol";
 color: string = ''

 cambiarColor(nuevoColor: string): void {
  this.color = nuevoColor;
}
ocultarSaludo(): void {
  this.mostrarSaludo = false;
  this.mostrarSaludoChange.emit(this.mostrarSaludo);
}
}
