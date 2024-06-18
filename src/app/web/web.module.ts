import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    InicioComponent,
   
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    MenubarModule,
    RouterModule,
    ToastModule,
    ButtonModule,

    
  ],
  providers:[
    MessageService
  ]
})
export class WebModule { }