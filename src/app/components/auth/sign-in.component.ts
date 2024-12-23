import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-container">
      <h2>Sign In</h2>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" [(ngModel)]="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" [(ngModel)]="password" name="password" required>
        </div>
        <div class="buttons">
          <button type="submit">Sign In</button>
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
export class SignInComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    // For now, just navigate to books page
    this.router.navigate(['/books']);
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}