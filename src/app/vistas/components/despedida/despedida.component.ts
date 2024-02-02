import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-despedida',
  templateUrl: './despedida.component.html',
  styleUrl: './despedida.component.css'
})

export class DespedidaComponent implements OnInit {
  nombre: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.nombre = params['nombre'];
    });
  }
}
