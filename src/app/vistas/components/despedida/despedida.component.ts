import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-despedida',
  templateUrl: './despedida.component.html',
  styleUrl: './despedida.component.css'
})

export class DespedidaComponent implements OnInit {
  nombre: string = "";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.
     pipe(
       tap(() => {
        let partial  = this.router.url.split('/')
        this.nombre =  partial[partial.length -1];


       })
     ).subscribe()

   }
}
