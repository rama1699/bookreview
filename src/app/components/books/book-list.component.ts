import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid-container">
      <h2>Books</h2>
      <button (click)="onAddBook()">Add Book</button>
      <table>
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Author Name</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let book of books">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.isbn }}</td>
            <td>
              <button (click)="onEdit(book)">Edit</button>
              <button (click)="onView(book)">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .grid-container {
      padding: 1rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    th, td {
      padding: 0.5rem;
      border: 1px solid #ddd;
    }
  `]
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Sample data for now
    this.books = [
      { id: 1, title: 'Sample Book', author: 'John Doe', isbn: '1234567890123' }
    ];
  }

  onAddBook() {
    this.router.navigate(['/books/add']);
  }

  onEdit(book: Book) {
    this.router.navigate(['/books/edit', book.id]);
  }

  onView(book: Book) {
    this.router.navigate(['/books/view', book.id]);
  }
}