import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-librotres',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule, ToastModule, RouterModule],
  templateUrl: './librotres.component.html',
  styleUrl: './librotres.component.scss'
})
export class LibrotresComponent implements OnInit {
  items: MenuItem[] = [];
  currentRating: number = 0;

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
        label: 'Categorías',
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

  rate(star: number) {
    this.currentRating = star;
    console.log(`Rated with ${star} stars`);
  }
}
