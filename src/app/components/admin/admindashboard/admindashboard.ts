import { Component, inject, OnInit } from '@angular/core';
import { SitesService } from '../../../services/sites-service';
import { Sites } from '../../../model/sites';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-admindashboard',
  imports: [FormsModule,FormsModule],
  templateUrl: './admindashboard.html',
  styleUrl: './admindashboard.css',
})
export class Admindashboard implements OnInit {
  siteservice:SitesService=inject(SitesService)
  sites:Sites[]=[]
  siteRechercher:Sites[]=[]
  site:string="";

  ngOnInit(): void {
     this.siteservice.getSites().subscribe(
       data=> {this.sites=data
       this.siteRechercher=data}
     ) }
   rechercherSite() {
  const exactMatch = this.sites.filter(s => s.title === this.site.trim());
   
  if (exactMatch.length > 0) {
    this.siteRechercher = exactMatch;
  } else if (this.site.trim()) {
    this.siteRechercher = this.sites.filter(s => s.title[0].toLowerCase() === this.site[0].toLowerCase());
  } else {
    this.siteRechercher =this.sites;
  }

}
 supprimersite(id: number, site: Sites) {
  if (confirm(`Are you sure you want to delete "${site.title}"?`)) {
    this.siteservice.deleteSite(id).subscribe(
      data => {
        const index = this.sites.findIndex(s => s.id === site.id); // safer than indexOf
        if (index > -1) this.sites.splice(index, 1);
      }
    );
  }
}
ajoutersites(s:Sites){
  this.siteservice.addSite(s).subscribe(
    

  )


}


   




}
