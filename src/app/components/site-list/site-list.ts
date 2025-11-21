import { Component, inject, OnInit } from '@angular/core';
import { SiteContent } from '../site-content/site-content';
import { SitesService } from '../../services/sites-service';
import { FormsModule } from '@angular/forms';
import { Site } from '../../model/site';

@Component({
  selector: 'app-site-list',
  imports: [SiteContent, FormsModule],
  templateUrl: './site-list.html',
  styleUrl: './site-list.css',
})
export class SiteList implements OnInit {
  private readonly siteService=inject(SitesService);
  siteList: Site[]=[];
  sitesResearched:Site[]=[];
  sitesFiltered:Site[]=[];
  site:string="";
  minPrice:number=0;

  ngOnInit(){
      this.siteService.getSites().subscribe(
        data=>{
          this.siteList=data;
          this.sitesResearched=data;
          this.sitesFiltered=data;
        }
      );      
  }

  researchSites() {
  const exactMatch = this.siteList.filter(s => s.title === this.site.trim());
   
  if (exactMatch.length > 0) {
    this.sitesResearched = exactMatch;
  } else if (this.site.trim()) {
    this.sitesResearched = this.siteList.filter(s => s.title[0].toLowerCase() === this.site[0].toLowerCase());
  } else {
    this.sitesResearched =this.siteList;
  }
  this.sitesFiltered=this.sitesResearched;
  }

  priceSlider(){
      this.sitesFiltered=this.sitesResearched.filter(s=>s.price>=this.minPrice);
  }

}
