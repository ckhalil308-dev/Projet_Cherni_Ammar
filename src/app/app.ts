import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { AdminNav } from "./components/admin/admin-nav/admin-nav";
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet, AdminNav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    router :Router= inject(Router);
    nav(){
      return (this.router.url.startsWith('/admindash') || this.router.url.startsWith('/comments') || this.router.url.startsWith('/addsite'));
    }
     constructor() {
 
    window.addEventListener('popstate', () => {
      localStorage.removeItem('role');
      this.router.navigate(['/home']);
    });
  }
}
