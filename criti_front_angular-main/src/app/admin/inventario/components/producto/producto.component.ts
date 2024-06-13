import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  libros: any[] = [{ id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
    { id: 1, titulo: "El Ice Cube", autor: "Autor Anónimo", sinopsis: "La historia continua", categoria_id: 1 },
 
  ];
  cols: any[] = []

  openNew() {

  }
  editMateria(mate: any) {

  }
  deleteMateria(mate: any) {

  }
}