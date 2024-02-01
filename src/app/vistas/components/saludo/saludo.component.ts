import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  @Input() mostrarSaludo: boolean = true;
  @Output() mostrarSaludoChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  nombre: string = "Sol";
  color: string = '';

  // Inyecta Router en el constructor
  constructor(private router: Router) { }

  cambiarColor(nuevoColor: string): void {
    this.color = nuevoColor;
  }

  ocultarSaludo(): void {
    this.mostrarSaludo = false;
    this.mostrarSaludoChange.emit(this.mostrarSaludo);
  }

  mostrarMensajeSaludo(): void {
    this.mostrarSaludo = true; // Cambia el valor de mostrarSaludo a true
    this.mostrarSaludoChange.emit(this.mostrarSaludo);
  }

  irDespedida(): void {
    // Utiliza this.router para navegar a la ruta 'despedida'
    this.router.navigate(['/despedida', this.nombre]);
  }
}
