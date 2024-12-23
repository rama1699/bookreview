import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-container">
      <h2>{{ isEditing ? 'Edit' : 'Add' }} Book</h2>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="title">Book Title:</label>
          <input type="text" id="title" [(ngModel)]="book.title" name="title" required>
        </div>
        <div class="form-group">
          <label for="author">Author Name:</label>
          <input type="text" id="author" [(ngModel)]="book.author" name="author" required>
        </div>
        <div class="form-group">
          <label for="isbn">ISBN:</label>
          <input type="text" id="isbn" [(ngModel)]="book.isbn" name="isbn" required
                 pattern="[0-9]{13}" title="ISBN must be 13 digits">
        </div>
        <div class="buttons">
          <button type="submit">{{ isEditing ? 'Update' : 'Save' }}</button>
          <button type="button" (click)="onCancel()">Cancel</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .form-container {
      max-width: 400px;
      margin: 2rem auto;
      padding: 1rem;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    .buttons {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
  `]
})
export class AddBookComponent {
  book: Book = {
    title: '',
    author: '',
    isbn: ''
  };
  isEditing = false;

  onSubmit() {
    // Will implement save/update logic
  }

  onCancel() {
    // Will implement navigation
  }
}