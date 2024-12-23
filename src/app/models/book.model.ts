export interface Book {
  id?: number;
  title: string;
  author: string;
  isbn: string;
}

export interface User {
  username: string;
  password: string;
  isAdmin?: boolean;
}