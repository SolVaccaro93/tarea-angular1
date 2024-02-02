import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './vistas/pages/main-page/main-page.component';
import { DespedidaComponent } from './vistas/components/despedida/despedida.component';

const routes: Routes = [
  { path: 'saludo', component: MainPageComponent },
  { path: 'despedida/:nombre', component: DespedidaComponent },
  { path: '**', redirectTo: 'saludo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
