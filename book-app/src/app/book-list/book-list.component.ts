import { Component, OnInit } from '@angular/core';

interface Book {
  title: string;
  author: string;
  coverImage: string;
  rating: number;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    {
      title: 'Cien años de soledad',
      author: 'Gabriel García Márquez',
      coverImage: 'assets/images/book-cover.jpg',
      rating: 4.5
    },
    {
      title: 'Las mil y una noches',
      author: 'Autor desconocido',
      coverImage: 'assets/images/book-cover2.jpg',
      rating: 4.3
    },
    {
      title: 'Vuelta al mundo en 80 días',
      author: 'Julio Verne',
      coverImage: 'assets/images/book-cover3.jpg',
      rating: 5
    }
    // Agrega más libros aquí
  ];

  ngOnInit(): void {
  }
}
