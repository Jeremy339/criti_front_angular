import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [MessageService]
})
export class InicioComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Categorias',
        icon: 'pi pi-fw pi-id-card',
        routerLink: ['/web/categoria']
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

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Marcado como favorito' });
  }
}
