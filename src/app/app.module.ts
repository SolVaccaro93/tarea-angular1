import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './vistas/components/saludo/saludo.component';
import { DespedidaComponent } from './vistas/components/despedida/despedida.component';
import { MainPageComponent } from './vistas/pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    DespedidaComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
