import { Component, inject, OnInit } from '@angular/core';
import { SiteContent } from '../site-content/site-content';
import { Sites } from '../../model/sites';
import { SitesService } from '../../services/sites-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-site-list',
  imports: [SiteContent, FormsModule],
  templateUrl: './site-list.html',
  styleUrl: './site-list.css',
})
export class SiteList implements OnInit {
  siteList: Sites[]=[];
  siteRechercher:Sites[]=[];
  siteFiltered:Sites[]=[];
  site:string="";
  minPrice:number=0;

  private siteService=inject(SitesService);

  ngOnInit(){
      this.siteService.getSites().subscribe({
        next: (data)=>{
          this.siteList=data;
          this.siteRechercher=data;
          this.siteFiltered=data;
        },
        error: (err)=>{
          console.error('Error fetching sites:', err);
        },
      });      
  }

  rechercherSite() {
  const exactMatch = this.siteList.filter(s => s.title === this.site.trim());
   
  if (exactMatch.length > 0) {
    this.siteRechercher = exactMatch;
  } else if (this.site.trim()) {
    this.siteRechercher = this.siteList.filter(s => s.title[0].toLowerCase() === this.site[0].toLowerCase());
  } else {
    this.siteRechercher =this.siteList;
  }
  this.siteFiltered=this.siteRechercher;
  }

  priceSlider(){
      this.siteFiltered=this.siteRechercher.filter(s=>s.price>=Number(this.minPrice));
  }

}
