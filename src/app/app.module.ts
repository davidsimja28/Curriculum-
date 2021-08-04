import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { ObjetivoComponent } from './Pages/objetivo/objetivo.component';
import { FormacionComponent } from './Pages/formacion/formacion.component';
import { ExperienciaComponent } from './Pages/experiencia/experiencia.component';
import { HabilidadesComponent } from './Pages/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    ObjetivoComponent,
    FormacionComponent,
    ExperienciaComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
