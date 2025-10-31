import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Features } from "../../features/features";

@Component({
  selector: 'app-home',
  imports: [Features],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
