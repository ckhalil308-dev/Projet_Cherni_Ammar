import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { AdminNav } from "./components/admin/admin-nav/admin-nav";

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet, AdminNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    router :Router= inject(Router);
    nav(){
      return this.router.url.startsWith('/admindash');
    }
    
}
