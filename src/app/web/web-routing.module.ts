import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LibroComponent } from './libro/libro.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CalificadosComponent } from './calificados/calificados.component';
import { RecomendadosComponent } from './recomendados/recomendados.component';

const routes: Routes = [
  {
    path: "",
    component: InicioComponent,
    children: [
      {
        path: "inicio",
        component: InicioComponent
      },
      {
        path: "libro",
        component: LibroComponent
      },
      {
        path: "categoria",
        component: CategoriaComponent
      },
      {
        path: "calificados",
        component: CalificadosComponent
      },
      {
        path: "recomendados",
        component: RecomendadosComponent
      }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
