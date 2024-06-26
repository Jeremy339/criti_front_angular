import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calificados',
  standalone: true,
  imports: [MenubarModule, ButtonModule, ToastModule, CommonModule, RouterModule],
  templateUrl: './calificados.component.html',
  styleUrl: './calificados.component.scss'
})
export class CalificadosComponent implements OnInit {
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
        label: 'Recomendados',
        icon: 'pi pi-fw pi-id-card',
        routerLink: ['/web/recomendados']
      }

    ];
  } 
}





