import { Component, Input } from '@angular/core';
import { Sites } from '../../model/sites';
import { RouterLink } from "@angular/router";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-site-content',
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './site-content.html',
  styleUrl: './site-content.css',
})
export class SiteContent {
  @Input() site!:Sites;

}
