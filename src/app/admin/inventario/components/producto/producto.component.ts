import { Component, inject } from '@angular/core';
import { LibroService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  private libroService = inject(LibroService)
  cities: any = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ]
  libros: any[] = [];
  cols: any[] = [];

  constructor() {
    this.libroService.funListar().subscribe(
      (res: any) => {
        this.libros = res.data
      }
    )
  }
  openNew() {

  }
  editLibro(mate: any) {

  }
  deleteLibro(mate: any) {

  }
}