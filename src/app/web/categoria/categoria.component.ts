import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';  
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [MenubarModule, ButtonModule, ToastModule,RouterModule],  
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']  
})
export class CategoriaComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private messageService: MessageService) {}

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Marcado como favorito' });
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-id-card',
        routerLink: ['/web/inicio']
      },
      {
        label: 'Mejores calificados',
        icon: 'pi pi-fw pi-id-card',
        routerLink: ['/web/calificados']
      },
      {
        label: 'Recomendados',
        icon: 'pi pi-fw pi-id-card',
        routerLink: ['/web/recomendados']
      }
    ];
  }
}

