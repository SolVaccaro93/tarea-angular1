import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-despedida',
  templateUrl: './despedida.component.html',
  styleUrl: './despedida.component.css'
})

export class DespedidaComponent implements OnInit {
  nombre: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.
     pipe(
       map(params => {
        this.nombre = params['nombre']
       })
     ).subscribe()

   }
}
