import { Component, Input } from '@angular/core';
import { Sites } from '../../model/sites';

@Component({
  selector: 'app-site-content',
  imports: [],
  templateUrl: './site-content.html',
  styleUrl: './site-content.css',
})
export class SiteContent {
  @Input() site!:Sites;

}
