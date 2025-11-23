import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-site-nav',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.css',
})
export class SiteNav implements OnInit {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  siteId!:string;
  
  ngOnInit(): void {
    this.siteId = this.activatedRoute.snapshot.params['idsite'];
  }

}
