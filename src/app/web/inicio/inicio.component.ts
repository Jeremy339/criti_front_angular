import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Categorias',
        icon:'pi pi-fw pi-id-card',
        routerLink: ['/web/categoria']
      },
     {
        label: 'Mejores calificados',
        icon:'pi pi-fw pi-id-card',
        routerLink: ['web/calificados']
      }, 
      {
        label: 'Libros',
        icon:'pi pi-fw pi-id-card',
        routerLink: ['/web/libro'],
      },
      {
        label: 'Recomendados',
        icon:'pi pi-fw pi-id-card',
        routerLink: ['/web/recomendados'],
      } 
    ];
  }

}



