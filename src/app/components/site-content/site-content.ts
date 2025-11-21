import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CurrencyPipe } from '@angular/common';
import { Site } from '../../model/site';

@Component({
  selector: 'app-site-content',
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './site-content.html',
  styleUrl: './site-content.css',
})
export class SiteContent {
  @Input() site!:Site;

}
