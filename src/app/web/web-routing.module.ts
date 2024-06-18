import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LibroComponent } from './libro/libro.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CalificadosComponent } from './calificados/calificados.component';
import { RecomendadosComponent } from './recomendados/recomendados.component';
import { LibrodosComponent } from './librodos/librodos.component';
import { LibrotresComponent } from './librotres/librotres.component';


const routes: Routes = [
      {
        path: "inicio",
        component: InicioComponent
      },
      {
        path: "libro",
        component: LibroComponent
      },
      {
        path: "librodos",
        component: LibrodosComponent
      },
      {
        path: "librotres",
        component: LibrotresComponent
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
      },
       
    ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
