import { Component, inject, OnInit } from '@angular/core';
import { SitesService } from '../../../services/sites-service';
import { FormsModule } from "@angular/forms";
import { RouterLink } from '@angular/router';
import { Site } from '../../../model/site';

@Component({
  selector: 'app-admindashboard',
  imports: [FormsModule,FormsModule,RouterLink],
  templateUrl: './admindashboard.html',
  styleUrl: './admindashboard.css',
})
export class Admindashboard implements OnInit {
  private readonly siteservice:SitesService=inject(SitesService)
  sites:Site[]=[]
  sitesResearched:Site[]=[]
  site:string="";

  ngOnInit(): void {
     this.siteservice.getSites().subscribe(
       data=> {this.sites=data
       this.sitesResearched=data}
     ) }
   researchSite() {
  const exactMatch = this.sites.filter(s => s.title === this.site.trim());
   
  if (exactMatch.length > 0) {
    this.sitesResearched = exactMatch;
  } else if (this.site.trim()) {
    this.sitesResearched = this.sites.filter(s => s.title[0].toLowerCase() === this.site[0].toLowerCase());
  } else {
    this.sitesResearched =this.sites;
  }

}
 deleteSite(id: string, site: Site) {
  if (confirm(`Are you sure you want to delete "${site.title}"?`)) {
    this.siteservice.deleteSite(id).subscribe(
      () => {
        const index = this.sites.findIndex(s => s.id === site.id); 
        if (index > -1) this.sites.splice(index, 1);
      }
    );
  }
}


   




}
