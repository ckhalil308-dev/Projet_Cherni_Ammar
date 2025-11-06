import { Component, Input } from '@angular/core';
import { Sites } from '../../model/sites';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-site-content',
  imports: [RouterLink],
  templateUrl: './site-content.html',
  styleUrl: './site-content.css',
})
export class SiteContent {
  @Input() site!:Sites;

}
