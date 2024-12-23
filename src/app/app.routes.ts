import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SignInComponent } from './components/auth/sign-in.component';
import { AddBookComponent } from './components/books/add-book.component';
import { BookListComponent } from './components/books/book-list.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignInComponent }, // Reusing SignIn component for now
  { path: 'admin', component: SignInComponent }, // Reusing SignIn component for now
  { path: 'books', component: BookListComponent },
  { path: 'books/add', component: AddBookComponent },
  { path: 'books/edit/:id', component: AddBookComponent },
  { path: 'books/view/:id', component: AddBookComponent }, // Will create a separate view component later
];