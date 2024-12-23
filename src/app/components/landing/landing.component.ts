import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Welcome to Book Management</h1>
      <div class="buttons">
        <button (click)="showSignIn()">Sign In</button>
        <button (click)="showSignUp()">Sign Up</button>
        <button (click)="showAdminLogin()">Admin Login</button>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
    }
    .buttons {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    button {
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  `]
})
export class LandingComponent {
  constructor(private router: Router) {}

  showSignIn() {
    this.router.navigate(['/signin']);
  }

  showSignUp() {
    this.router.navigate(['/signup']);
  }

  showAdminLogin() {
    this.router.navigate(['/admin']);
  }
}