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

  sitesFiltered:Site[]=[];
  site:string="";
  minPrice:number=0;

  ngOnInit(){
      this.siteService.getSites().subscribe(
        data=>{
          this.siteList=data;
          this.sitesFiltered=data;
        }
      );      
  }

researchSites() {

    const search = this.site.trim().toLowerCase();

    let filtered: Site[] = [];

    if (search === "") {
      filtered = this.siteList;
    } else {
      const exactMatch = this.siteList.filter(siteItem => 
              siteItem.title.toLowerCase() === search
      );

      if (exactMatch.length > 0) {
        filtered = exactMatch;
      } else {
        filtered = this.siteList.filter(siteItem => 
           siteItem.title[0].toLowerCase() === search[0]
        );
      }
    }
    this.sitesFiltered = filtered.filter(siteItem => 
        siteItem.price >= this.minPrice
    );
  }
  priceSlider() {
    this.researchSites();
  }
}
  

