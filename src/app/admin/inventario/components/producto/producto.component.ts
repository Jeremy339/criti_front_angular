import { Component, OnInit, Inject } from '@angular/core';
import { LibroService } from '../../services/producto.service';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  sinopsis: string;
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  libros: Libro[] = [];
  dialog_visible: boolean = false;
  libro_id: number = -1;
  libroForm = new FormGroup({
    titulo: new FormControl(''),
    autor: new FormControl(''),
    sinopsis: new FormControl('')
  });

  cities: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  cols: any[] = [];

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.getLibros();
  }

  getLibros() {
    this.libroService.funListar().subscribe(
      (res: any) => {
        this.libros = res.data;
      },
      (error: any) => {
        console.error('Error al obtener los libros:', error);
      }
    );
  }

  mostrarDialog() {
    this.dialog_visible = true;
  }

  guardarLibro() {
    if (this.libro_id > 0) {
      this.libroService.funModificar(this.libro_id, this.libroForm.value).subscribe(
        (res: any) => {
          this.dialog_visible = false;
          this.getLibros();
          this.libro_id = -1;
          this.alerta("ACTUALIZADO", "El libro se modificó con éxito!", "success");
        },
        (error: any) => {
          this.alerta("ERROR AL ACTUALIZAR", "Verifica los datos!", "error");
        }
      );
      this.libroForm.reset();
    } else {
      this.libroService.funGuardar(this.libroForm.value).subscribe(
        (res: any) => {
          this.dialog_visible = false;
          this.getLibros();
          this.alerta("REGISTRADO", "El libro se creó con éxito!", "success");
        },
        (error: any) => {
          this.alerta("ERROR AL REGISTRAR", "Verifica los datos!", "error");
        }
      );
      this.libroForm.reset();
    }
  }

  editarLibro(libr: Libro) {
    this.dialog_visible = true;
    this.libro_id = libr.id;
    this.libroForm.setValue({ titulo: libr.titulo, autor: libr.autor, sinopsis: libr.sinopsis });
  }

  eliminarLibro(libr: Libro) {
    Swal.fire({
      title: "¿Está seguro de eliminar el libro?",
      text: "Una vez eliminado no se podrá recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.libroService.funEliminar(libr.id).subscribe(
          (res: any) => {
            this.alerta("ELIMINADO", "Libro eliminado correctamente.", "success");
            this.getLibros();
            this.libro_id = -1;
          },
          (error: any) => {
            this.alerta("ERROR", "Error al intentar eliminar el libro.", "error");
          }
        );
        this.libroForm.reset();
      }
    });
  }

  alerta(title: string, text: string, icon: 'success' | 'error' | 'info' | 'question') {
    Swal.fire({ title, text, icon });
  }

  openNew() {
    // Implementación para abrir un nuevo libro (opcional según la funcionalidad requerida)
  }

}
