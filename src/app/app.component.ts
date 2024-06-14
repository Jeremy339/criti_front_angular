import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'front_angular_nest';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Categorias',
        icon:'pi pi-fw pi-id-card',
        routerLink: ['/admin/categoria']
      },
     {
        label: 'Mejores calificados',
        icon:'pi pi-fw pi-id-card',
        routerLink: ['/admin/categoria']
      }, 
      {
        label: 'Recomendados',
        icon:'pi pi-fw pi-id-card',
        routerLink: ['/admin/categoria'],
      } 
    ];
  }

}


