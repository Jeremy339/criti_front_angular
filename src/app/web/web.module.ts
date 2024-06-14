import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    MenubarModule,
    RouterModule,
    
  ]
})
export class WebModule { }
