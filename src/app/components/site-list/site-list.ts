import { Component, inject, OnInit } from '@angular/core';
import { SiteContent } from '../site-content/site-content';
import { Sites } from '../../model/sites';
import { SitesService } from '../../services/sites-service';

@Component({
  selector: 'app-site-list',
  imports: [SiteContent],
  templateUrl: './site-list.html',
  styleUrl: './site-list.css',
})
export class SiteList implements OnInit {
  siteList: Sites[]=[];

  private siteService=inject(SitesService);

  ngOnInit(){
      this.siteService.getSites().subscribe({
        next: (data)=>{
          this.siteList=data;
        },
        error: (err)=>{
          console.error('Error fetching sites:', err);
        },
      });      
  }



}
