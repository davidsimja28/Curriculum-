import { ContactoComponent } from './Pages/contacto/contacto.component';
import { HabilidadesComponent } from './Pages/habilidades/habilidades.component';
import { ExperienciaComponent } from './Pages/experiencia/experiencia.component';
import { FormacionComponent } from './Pages/formacion/formacion.component';
import { ObjetivoComponent } from './Pages/objetivo/objetivo.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo:'/inicio', pathMatch: 'full' },
  {path: 'inicio', component: InicioComponent},
  {path: 'objetivo', component: ObjetivoComponent},
  {path: 'formacion', component: FormacionComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'experiencia', component: ExperienciaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
