import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';  // Importa el módulo ToastModule

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [MenubarModule, ButtonModule, ToastModule],  // Agrega ToastModule y ButtonModule a los imports
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']  // Corrección de styleUrl a styleUrls
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

