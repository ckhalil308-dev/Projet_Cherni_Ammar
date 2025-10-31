import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

}
